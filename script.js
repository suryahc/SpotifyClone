document.addEventListener("DOMContentLoaded", () => {
    const masterplayButton = document.getElementById("masterplay");
    const songTitle = document.getElementById("songTitle");
    const audioElement = new Audio("songs/1.mp3");
    let isPlaying = false;

    function updatePlayButton() {
        masterplayButton?.classList.toggle("fa-play-circle", !isPlaying);
        masterplayButton?.classList.toggle("fa-pause-circle", isPlaying);
    }

    masterplayButton?.addEventListener("click", () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play()
                .then(() => {
                    isPlaying = true;
                    updatePlayButton();
                    songTitle.textContent = "Now playing: Let me Love You — Justin Bieber";
                })
                .catch((error) => console.error("Error playing audio:", error));
        } else {
            audioElement.pause();
            isPlaying = false;
            updatePlayButton();
            songTitle.textContent = "Paused — Let me Love You";
        }
    });

    audioElement.addEventListener("ended", () => {
        isPlaying = false;
        updatePlayButton();
        songTitle.textContent = "Let me Love You — Justin Bieber";
    });
});
