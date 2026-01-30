document.getElementById("tombolSuka").addEventListener("click", telahSuka);
function telahSuka() {
  document.getElementById("tombolSuka").disabled = true;
  document.getElementById("tombolSuka").textContent = "Menyukai";
  document.getElementById("telahSuka").textContent = "Terima kasih telah menyukai halaman GitHub saya! " + String.fromCodePoint(0x2764);
}
