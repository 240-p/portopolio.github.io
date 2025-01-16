// Pilih elemen
const tombol2 = document.getElementById("tombol2");
const galeri2 = document.getElementById("galeri2");
const gambar2 = document.querySelectorAll(".gambar2");
const modal2 = document.getElementById("modal2");
const gambarBesar2 = document.querySelector(".gambar-besar2");
const tutup2 = document.querySelector(".tutup2");

// Tombol untuk menampilkan/sembunyikan galeri
tombol2.addEventListener("click", () => {
  galeri2.classList.toggle("sembunyi2");
});

// Menampilkan gambar besar saat diklik
gambar2.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    modal2.classList.add("tampil2");
    gambarBesar2.src = img.src;
  });
});

// Menutup modal
tutup2.addEventListener("click", () => {
  modal2.classList.remove("tampil2");
});

// Menutup modal saat diklik di luar gambar
modal2.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.classList.remove("tampil2");
  }
});
