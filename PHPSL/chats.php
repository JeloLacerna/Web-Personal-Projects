<?php
session_start();

include("./functions/connection.php");
include("logincheck.php");

$user_data = check_login($db);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chats</title>
    <link rel="stylesheet" href="chat-styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        var from = null,
            url = 'http://localhost/chatapp/functions/getmessage.php';
        let start = 0

        from = "<?php echo $user_data['firstname']; ?>";

        $(document).ready(
            function() {

                setInterval(function() {
                    load(start);
                }, 500);

                $('form').submit(function(e) {

                    $.post(url, {
                        message: $('#message').val(),
                        from: from
                    });
                    console.log($('#message').val());
                    $('#message').val('');

                    return false;
                })
            }
        )

        function load() {
            $.get(url + '?start=' + start, function(result) {
                if (!result.items) {
                    console.log("no chat logs left at id = " + start)
                } else {
                    console.log('printing chat logs #' + start)
                    result.items.forEach(item => {
                        start = item.id;
                        $('#chat').append(renderMessage(item));
                    })
                    $('#chat').animate({
                        scrollTop: $('#chat')[0].scrollHeight
                    });
                }
            })
        }

        function renderMessage(item) {

            var time = new Date(item.created);
            time = `${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`

            if (item.from === from) {
                return `
                    <li class="me">
                        <div class="entete">
                            <h3>${time}</h3>
                            <h2>${item.from}</h2>
                        </div>
                        <div class="triangle"></div>
                        <div class="message">
                            ${item.message}
                        </div>
                    </li>`
            } else {
                return `
                    <li class="you">
                        <div class="entete">
                            <h3>${time}</h3>
                            <h2>${item.from}</h2>
                        </div>
                        <div class="triangle"></div>
                        <div class="message">
                            ${item.message}
                        </div>
                    </li>`
            }
        }
    </script>
</head>
<body>
    <div id="container">

        <main>
            <header>
                <div>
                    <p>General Chatting Place</p>
                    <h2>Chatting with all Users</h2>
                </div>
                <div id="profile-container">
                    <p>Account</p>
                    <h2>Hi
                        <?php

                        echo "<span>" . $user_data['firstname'] . "</span>";

                        ?>
                    </h2>
                    <a href="logout.php">Logout</a>
                </div>
            </header>
            <ul id="chat">
            </ul>

            <form action="" class="chat-form">
                <div>
                    <input type="text" placeholder="Type your message" id="message" autocomplete="off" autofocus></input>
                    <input type="submit" value="Send">
                </div>
            </form>
        </main>
    </div>
</body>
</html>