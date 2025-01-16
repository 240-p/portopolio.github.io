<?php
// Konfigurasi database
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'kontak';

// Koneksi database
$koneksi = mysqli_connect($host, $username, $password, $database);

// Cek koneksi
if (!$koneksi) {
 die("Koneksi gagal: " . mysqli_connect_error());
}

// Ambil data form
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];

// Simpan data ke database
$query = "INSERT INTO kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";
if (mysqli_query($koneksi, $query)) {
?>
 <script>
 alert('Pesan terkirim!');
 window.location.href = 'index.php';
 </script>
<?php
} else {
?>
 <script>
 alert('Gagal mengirim pesan!');
 window.location.href = 'index.php';
 </script>
<?php
}
// Tutup koneksi
mysqli_close($koneksi);
?>