// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")

let songs = [
    {
        songName: "rah-e-ishq", filePath:"song/1.mp3", coverPath: "covers/1.jpg"
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
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)

    myProgressBar.value=progress
    //update seekbar
})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})