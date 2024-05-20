// myzika

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("audio");
  audio.play();
});

const video = document.getElementById("background-video");

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth", block: "end" });

  // Остановка воспроизведения видео
  video.pause();
}
