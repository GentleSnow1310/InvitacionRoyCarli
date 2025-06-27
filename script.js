document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });
});
