document.getElementById("tombolSuka").addEventListener("click", telahSuka);
function telahSuka() {
  document.getElementById("tombolSuka").disable = true;
  document.getElementById("tombolSuka").textContent = "Menyukai";
  document.getElementById("telahSuka").textContent = "Terima kasih!";
}
