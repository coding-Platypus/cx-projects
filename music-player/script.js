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


function createSongItem(name, index) {
    const song = document.createElement('li');
    const songName = document.createElement('p');
    const cover = document.createElement('img');

    cover.src = `images/${name}.jpg`;
    song.classList.add('song')
    song.setAttribute('id', `song-${index}`);
    songName.innerText = name;
    song.appendChild(songName);
    song.insertBefore(cover, songName);
    songList.appendChild(song);

    return song;
}

function handleOnSongItemClick(index) {
    songIndex = index;
    loadSong(songs[songIndex], songIndex);
    playSong();
}

function createSongList() {
    songs.forEach((song, index) => {
        const songElement = createSongItem(song, index);

        songElement.addEventListener('click', () => {
            handleOnSongItemClick(index); 
        })
    })
}

//create intial songlist

createSongList();


// Initially load song info DOM
loadSong(songs[songIndex], songIndex);

function removeSelectedSong() {
    let highlightedSong = document.querySelectorAll('.selected-song');
    
    if(highlightedSong.length > 0){
        highlightedSong[0].classList.remove('selected-song');
    }
}

function highlightSelectedSong(index){
    const selectedSong = songList.querySelector(`#song-${index}`);
    selectedSong.classList.add('selected-song');
}

// Update song details
function loadSong(song, index){
    removeSelectedSong();
    
    title.innerText = song;
    audio.src = `musics/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    
    highlightSelectedSong(index);
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