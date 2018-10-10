<?php

$name=$_POST['name'];
$visitor_email=$_POST['email'];
$message=$_POST['message'];

$email_form="ownblog12@gmail.com";
$email_subject="Thank for Feedback";

$email_body="user name:$name.\n".
            "user email:$visitor_email\n".

$to="rishugupt9@gmail.com";

$headers="from:$email_form\r\n";

$headers="reply-to:visitor_email\r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location:msg.html");

?>            
