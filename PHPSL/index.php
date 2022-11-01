<?php
session_start();

include("./functions/connection.php");
include("logincheck.php");

$res = array();

// when something is posted
if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : null;
    $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : null;
    $date = isset($_POST['date']) ? $_POST['date'] : null;
    $month = isset($_POST['month']) ? $_POST['month'] : null;
    $year = isset($_POST['year']) ? $_POST['year'] : null;

    //Signup
    if (!empty($email) && !empty($password) && !empty($firstname)) {

        $query = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
        $result = $db->query($query);

        // check to see if email has already been used
        if ($result) {
            if ($result && mysqli_num_rows($result) > 0) {
                $_SESSION['emailError'] = 'error';
            }
            else {
                $query = "INSERT INTO users (firstname, lastname, email, password, date, month, year) VALUES ('$firstname','$lastname','$email','$password','$date','$month','$year')";
                $result = $db->query($query);
                header("Location: chats.php");
                die;
            }
        } 
        
    }

    //Login
    if (!empty($email) && !empty($password) && empty($firstname)) {

        //read from database
        $query = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
        $result = $db->query($query);

        if ($result) {
            if ($result && mysqli_num_rows($result) > 0) {

                $user_data = mysqli_fetch_assoc($result);

                if ($user_data['password'] === $password) {

                    $_SESSION['id'] = $user_data['id'];
                    header("Location: chats.php");
                    die;
                } else {
                    // wrong password
                    $_SESSION['wrongPswd'] = 'error';
                }
                

                //TODO: Add function when password is wrong
            } else {
                $_SESSION['wrongEmail'] = 'error';
            }
        } else {
            $_SESSION['wrongEmail'] = 'error';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatApp | Home</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/x-icon" href="./Content/favicon_io/favicon.ico">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./functions/selectscript.js" defer></script>
</head>
<body>
    <div id="body">
        <div id="banner-home">
            <h1>Chatter<img class="logo-img" src="./Content/logo.png" alt=""></h1>
            <p>
                Connect with friends with the power of HTML, CSS, jQuery, PHP and occasionally, some Pixie Dust.
            </p>
        </div>
        <div id="login-form-wrap">
            <h2>Login</h2>
            <form id="login-form" method="post">
                <div class="form-control">
                    <input type="email" id="email" name="email" placeholder="Email" required autocomplete="off"
                        <?php
                            // i feel like a wizard doing this lol
                            if (isset($_SESSION['wrongEmail'])) {
                                echo 'class="invalid-input"';
                            } else {
                                echo 'class=""';
                            }
                        ?>>
                </div>
                <div class="form-control">
                    <input type="password" id="password" name="password" placeholder="Password" required autocomplete="off"
                        <?php
                            // i feel like a wizard doing this lol
                            if (isset($_SESSION['wrongPswd'])) {
                                echo 'class="invalid-input"';
                            } else {
                                echo 'class=""';
                            }
                        ?>
                    >
                </div>
                <div class="form-control">
                    <input id="login" type="submit" value="Login">
                </div>
            </form>
            <div id="create-account-wrap">
                <p>Not a member? <span onclick="showModal()" class="text-link" id="signup-link">Create Account</span>
                <p>
            </div>
        </div>
    </div>
    <div id="modal-container" 
    <?php
    // i feel like a wizard doing this lol
    if (isset($_SESSION['emailError'])) {
        echo 'style="display:block;"';
    } else {
        echo 'style="display:none;"';
    }
    ?>
    >
        <div id="signup-modal">
            <div id="signup">
                <img src="./Content/x-btn.png" alt="" id="x-btn">
                <div id="title-container">
                    <h2>
                        Signup
                    </h2>
                    <p>
                        Register your free account today.
                    </p>
                </div>
                <hr>
                <div id="form-container">
                    <form id="signup-form" method="post">
                        <div class="form-control signup-form" style="display: flex ;">
                            <div class="signup-form half-control">
                                <input type="text" placeholder="First Name" name="firstname" autocomplete="off" required>
                            </div>
                            <div style="width: 20px;">
                            </div>
                            <div class="signup-form half-control">
                                <input type="text" placeholder="Last Name" name="lastname" autocomplete="off" required>
                            </div>
                        </div>
                        <div class="form-control signup-form">
                            <input type="email" placeholder="Email" name="email" autocomplete="off" required 
                            <?php
                            // i feel like a wizard doing this lol
                            if (isset($_SESSION['emailError'])) {
                                echo 'class="invalid-input"';
                            } else {
                                echo 'class=""';
                            }
                            ?>
                            >
                        </div>
                        <div class="form-control signup-form">
                            <input type="password" placeholder="Password" name="password" autocomplete="off" required>
                        </div>
                        <p>
                            Birthday
                        </p>
                        <div class="form-control signup-form birthday" style="display: flex ;">
                            <div class="signup-form third-control">
                                <select name="date" id="date-select" class="birthdate-select" required>
                                    <option value="1" class="date-option" selected="false">1</option>
                                    <option value="2" class="date-option" selected="false">2</option>
                                    <option value="3" class="date-option" selected="false">3</option>
                                    <option value="4" class="date-option" selected="false">4</option>
                                    <option value="5" class="date-option" selected="false">5</option>
                                    <option value="6" class="date-option" selected="false">6</option>
                                    <option value="7" class="date-option" selected="false">7</option>
                                    <option value="8" class="date-option" selected="false">8</option>
                                    <option value="9" class="date-option" selected="false">9</option>
                                    <option value="10" class="date-option" selected="false">10</option>
                                    <option value="11" class="date-option" selected="false">11</option>
                                    <option value="12" class="date-option" selected="false">12</option>
                                    <option value="13" class="date-option" selected="false">13</option>
                                    <option value="14" class="date-option" selected="false">14</option>
                                    <option value="15" class="date-option" selected="false">15</option>
                                    <option value="16" class="date-option" selected="false">16</option>
                                    <option value="17" class="date-option" selected="false">17</option>
                                    <option value="18" class="date-option" selected="false">18</option>
                                    <option value="19" class="date-option" selected="false">19</option>
                                    <option value="20" class="date-option" selected="false">20</option>
                                    <option value="21" class="date-option" selected="false">21</option>
                                    <option value="22" class="date-option" selected="false">22</option>
                                    <option value="23" class="date-option" selected="false">23</option>
                                    <option value="24" class="date-option" selected="false">24</option>
                                    <option value="25" class="date-option" selected="false">25</option>
                                    <option value="26" class="date-option" selected="false">26</option>
                                    <option value="27" class="date-option" selected="false">27</option>
                                    <option value="28" class="date-option" selected="false">28</option>
                                    <option value="29" class="date-option" selected="false">29</option>
                                    <option value="30" class="date-option" selected="false">30</option>
                                    <option value="31" class="date-option" selected="false">31</option>
                                </select>
                            </div>
                            <div style="width: 20px;">
                            </div>
                            <div class="signup-form third-control">
                                <select name="month" id="month-select" class="birthdate-select" required>
                                    <option value="0" class="month-option" selected="false">January</option>
                                    <option value="1" class="month-option" selected="false">February</option>
                                    <option value="2" class="month-option" selected="false">March</option>
                                    <option value="3" class="month-option" selected="false">April</option>
                                    <option value="4" class="month-option" selected="false">May</option>
                                    <option value="5" class="month-option" selected="false">June</option>
                                    <option value="6" class="month-option" selected="false">July</option>
                                    <option value="7" class="month-option" selected="false">August</option>
                                    <option value="8" class="month-option" selected="false">September</option>
                                    <option value="9" class="month-option" selected="false">October</option>
                                    <option value="10" class="month-option" selected="false">November</option>
                                    <option value="11" class="month-option" selected="false">December</option>
                                </select>
                            </div>
                            <div style="width: 20px;">
                            </div>
                            <div class="signup-form third-control">
                                <select name="year" id="year-select" class="birthdate-select" required>
                                </select>
                            </div>
                        </div>
                        <hr>
                        <div class="form-control signup-form">
                            <p>
                                By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive Email Notifications from us and can opt out any time.
                            </p>
                        </div>
                        <div class="form-control signup-form">
                            <input type="submit" value="Signup">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <footer id="footer">
        <hr>
        <ul class="footer-nav">
            <a href="#">About</a>
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
        </ul>
        <span>©&nbsp;2022 -&nbsp;2022&nbsp; PHPSL Chatting App Project</span>
    </footer>
</body>
<script>
    // script for modal
    let signupModal = document.getElementById("modal-container");
    let signupBtn = document.getElementById("signup-link");
    let xBtn = document.getElementById("x-btn");

    signupBtn.onclick = function() {
        signupModal.style.display = "block";
    }

    xBtn.onclick = function() {
        signupModal.style.display = "none";
    }
</script>

</html>

<?php
    if (isset($_SESSION['emailError'])) {
        echo '<script>alert("Email is already in use")</script>';
        unset($_SESSION['emailError']);
    }
    if (isset($_SESSION['wrongPswd'])) {
        echo '<script>alert("Wrong password! Try again")</script>';
        unset($_SESSION['wrongPswd']);
    }
    if (isset($_SESSION['wrongEmail'])) {
        echo '<script>alert("Wrong Email! Try again")</script>';
        unset($_SESSION['wrongEmail']);
    }
?>