// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")

let songs = [
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/2.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/3.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/4.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/5.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/6.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/7.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/8.jpg"
    },
    {
        songName: "rah-e-ishq", filePath:"songs/1.mp3", coverPath: "covers/9.jpg"
    }
]

// audioElement.play()


//handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity=1;
    
    }else{
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play")
        masterPlay.classList.remove("fa-circle-pause")
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener("timeupdate", ()=>{
    //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)

    myProgressBar.value=progress
    //update seekbar
})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})