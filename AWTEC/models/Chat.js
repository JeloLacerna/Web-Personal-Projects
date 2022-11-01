const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  messageid: {
    type: Number,
    default: 1
  },
  message: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
