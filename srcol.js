const tombolKembaliAtas = document.querySelector(".tombol_kembali_atas");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    tombolKembaliAtas.classList.add("show");
  } else {
    tombolKembaliAtas.classList.remove("show");
  }
});

tombolKembaliAtas.addEventListener("mouseover", function () {
  tombolKembaliAtas.classList.add("animate");
});

tombolKembaliAtas.addEventListener("mouseout", function () {
  tombolKembaliAtas.classList.remove("animate");
});

tombolKembaliAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
