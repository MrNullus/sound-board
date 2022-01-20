const sounds = [
    "applause", "boo", "tada", "gasp", "victory"
];

sounds.forEach((sound) => {
    const btn = document.createElement("button");

    btn.innnerText = sound;

    btn.addEventListener("click", () => {
        stopSongs()

        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById("sound");
        
        song.pause();
        song.currentTime = 0;
    });
}