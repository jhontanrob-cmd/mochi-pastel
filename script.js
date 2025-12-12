var music = document.getElementById("bg-music");
var btn = document.getElementById("music-btn");

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸"; // Cambia el icono a pausa
    } else {
        music.pause();
        btn.innerHTML = "▶"; // Cambia el icono a play
    }
}