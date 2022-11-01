const express = require('express')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')

// Mongoose models
const User = require('./models/User')
const Chat = require('./models/Chat')

// Authentication functions
const { ensureAuthenticated, forwardAuthenticated } = require('./configs/auth')

// App start
const app = express()

module.exports = app

let user = {}

// Configure passport
require('./configs/passport')(passport)

// Connect to MongoDB
require('./configs/mongoose')

// View Engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    resave: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

// Homepage/Login/Register page
app.get('/', forwardAuthenticated, (req, res) => {
    res.render('index', {
        user
    })
})

// Chatting page
app.get('/chats', ensureAuthenticated, (req, res) => {
    res.render('chats', {
        user : req.user
    })
})

// Register/Post
app.post('/register', (req, res) => {
    let errors = []

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const day = req.body.day
    const month = req.body.month
    const year = req.body.year
    const email = req.body.email
    const password = req.body.password
    const password2 = req.body.password2

    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }

    User.findOne({ email: email }).then(user => {
        if (user) {
            errors.push({ msg: 'Email already exists' })
            res.render('index', {
                errors,
                firstname,
                lastname,
                email,
                password,
                password2
            })
        } else {
            const newUser = new User(
                req.body
            )

            newUser
                .save()
                .then(user => {
                    req.flash(
                        'success_msg',
                        'You are now registered and can log in'
                    );
                    res.render('index')
                })
                .catch(err => console.log(err))
        }
    })
})

// Login/Post
app.post('/login', (req, res, next) => {
    let options = {
        successRedirect: '/chats',
        failureRedirect: '/',
        failureFlash: true
    }

    passport.authenticate('local', options)(req, res, next)
})

// Logout/Post
app.get('/logout', (req, res) => {
    req.logout({ keepSessionInfo: false }, () => {
        res.redirect('/')
    })
})

// Server side routes for saving and getting chat messages
// Save chat
app.post('/sendmessage', (req, res) => {

    Chat.find().sort({ createdAt: -1 })
        .then((result) => {

            var chat
            
            if (result[0]) {
                chat = new Chat({
                    messageid: result[0].messageid + 1,
                    message: req.body.message,
                    sender: req.body.sender
                })
            } else {
                chat = new Chat({
                    message: req.body.message,
                    sender: req.body.sender
                })
            }

            chat.save()
            .then((result) => {
                console.log('Message Sent')
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
            return
        })
})

// Get chat
app.get('/getmessage/:id', (req, res) => {
    const id = req.params.id
    Chat.find({ messageid: { $gt: id} }).sort({ createdAt: 1 })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
            return
        })
})

// 404
app.use((req, res) => {
    res.status(404).render('404')
})