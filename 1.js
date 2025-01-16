// Pilih elemen
const tombol3 = document.getElementById("tombol3");
const galeri3 = document.getElementById("galeri3");
const gambar3 = document.querySelectorAll(".gambar3");
const modal3 = document.getElementById("modal3");
const gambarBesar3 = document.querySelector(".gambar-besar3");
const tutup3 = document.querySelector(".tutup3");

// Tombol untuk menampilkan/sembunyikan galeri
tombol3.addEventListener("click", () => {
  galeri3.classList.toggle("sembunyi3");
});

// Menampilkan gambar besar saat diklik
gambar3.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    modal3.classList.add("tampil3");
    gambarBesar3.src = img.src;
  });
});

// Menutup modal
tutup3.addEventListener("click", () => {
  modal3.classList.remove("tampil3");
});

// Menutup modal saat diklik di luar gambar
modal3.addEventListener("click", (e) => {
  if (e.target === modal3) {
    modal3.classList.remove("tampil3");
  }
});
