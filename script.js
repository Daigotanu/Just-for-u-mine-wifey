console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dandelions- Ruth B.", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Until I Found You(TANU👀❤️)", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Perfect-ED Sheeran", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "I Wanna Be Yours (TANU👀)-Arctic Monkeys", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Rabba", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "I Love You (Mine wifey😚)", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Hawayein (hehe its one of my fav. song)", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Khairiyat 😚😚", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "O Satthi", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Melting (speed up)", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle'); 
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the popup
    var popup = document.getElementById('popup');

    // Show the popup after a delay (e.g., 1 second)
    setTimeout(function() {
        popup.style.display = 'flex';
    }, 1000); // 1000 milliseconds = 1 second

    // Get the <span> element that closes the popup
    var closeBtn = document.getElementsByClassName('close-btn')[0];

    // When the user clicks on <span> (x), close the popup
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});