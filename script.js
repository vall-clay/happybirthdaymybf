document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const triangle = document.querySelector(".triangle");

  // Menambahkan elemen audio
  const audioDay = new Audio("lagu1.mp3"); // Ganti dengan path lagu1
  const audioNight = new Audio("lagu2.mp3"); // Ganti dengan path lagu2

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("night");
    updateTriangleColor();
    toggleMusic();
  });

  function updateTriangleColor() {
    if (body.classList.contains("night")) {
      triangle.style.borderLeftColor = "#2c3e50"; // night color
    } else {
      triangle.style.borderLeftColor = "#87CEEB"; // day color
    }
  }

  function toggleMusic() {
    if (body.classList.contains("night")) {
      audioDay.pause(); // Hentikan lagu siang jika sedang malam
      audioNight.play(); // Putar lagu malam
    } else {
      audioNight.pause(); // Hentikan lagu malam jika sedang siang
      audioDay.play(); // Putar lagu siang
    }
  }

  updateTriangleColor();
});
