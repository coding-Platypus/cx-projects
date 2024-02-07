const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const songList = document.querySelector('#songs');

// Song titles
const songs = ['Tere_naina', 'Tumi_jantei_paro_na', 'Baundule_ghuri', 'Pehle_bhi_main'];
let songIndex = 1;

//song list
songs.map((i,ind)=>{
    let song = document.createElement('li');
    let songName = document.createElement('p');
    let cover = document.createElement('img');
    cover.src = `images/${i}.jpg`;
    song.classList.add('song')
    song.setAttribute('id', `song-${ind}`);
    songName.innerText = i;
    song.appendChild(songName);
    song.insertBefore(cover, songName);
    songList.appendChild(song);

    song.addEventListener('click', ()=>{
        songIndex = ind;
        loadSong(songs[songIndex], songIndex);
        playSong();
    })
})




// Keep track of songs


// Initially load song info DOM
loadSong(songs[songIndex], songIndex);

// Update song details
function loadSong(song, index){
    let highlightedSong = document.querySelectorAll('.selected-song');
    if(highlightedSong.length > 0){
        highlightedSong[0].classList.remove('selected-song');
    }
    const selectedSong = songList.querySelector(`#song-${index}`);
    selectedSong.classList.add('selected-song');
    title.innerText = song;
    audio.src = `musics/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}




function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();

}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();
}

function prevSong(){
    songIndex-- ;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
        loadSong(songs[songIndex],songIndex);
        playSong();
    }

function nextSong(){
    songIndex++ ;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
        loadSong(songs[songIndex], songIndex);
        playSong();
}

function updateProgress(e) {
    const {duration, currentTime} = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = e.srcElement.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


// Event Listeners
playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);