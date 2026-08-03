let masterplayButton = document.getElementById("masterplay"); 
let audioElement = new Audio("songs/1.mp3");
function masterplay() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play().then(() => {
            console.log("Audio playing");
            masterplayButton.classList.remove("fa-play-circle");
            masterplayButton.classList.add("fa-pause-circle");
        }).catch(error => {
            console.error("Error playing audio:", error);
        });
    } else {
        audioElement.pause();
        console.log("Audio paused");
        masterplayButton.classList.remove("fa-pause-circle");
        masterplayButton.classList.add("fa-play-circle");
    }
}
// let masterplayButton = document.getElementById("masterplay");
// let audioElement = new Audio("songs/1.mp3");

// masterplayButton.addEventListener('click', () => {
//     console.log("Scripted");

//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterplayButton.classList.toggle("fa-play-circle");
//         masterplayButton.classList.toggle("fa-pause-circle");
//     } else {
//         audioElement.pause();
//         masterplayButton.classList.toggle("fa-play-circle");
//         masterplayButton.classList.toggle("fa-pause-circle");
//     }
// });
