<?php
$to = "fickryrabbani@gmail.com";
$subjek = "Test Email";
$pesan = "Ini adalah tes email dari PHP";
$headers = "fickryrabbani@gmail.com";

if (mail($to, $subjek, $pesan, $headers)) {
 echo "Email terkirim!";
} else {
 echo "Gagal mengirim email!";
}
?>