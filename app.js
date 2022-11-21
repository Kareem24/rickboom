const backBtn = document.querySelector('.backBtn');
const list = document.querySelector('.list-Btn');
const musicImage = document.getElementById('track-image');
const artistName = document.querySelector('.artist');
const musicTitle = document.querySelector('.song-title');
const time = document.querySelector('.time');
const btns = document.querySelectorAll('.controlBtn');
const audio = document.getElementById('audio');
const playBtn = document.querySelector('.playicon');
const pauseBtn = document.querySelector('.pauseicon');
const songDurationMinute = document.querySelector('.minutes')
const songDurationseconds = document.querySelector('.secs')
// console.log(songDurationMinute,songDurationseconds);


//music file
//images and song titles

const songs = [
    {
        music: 'abule',
        artistName: 'patoranking',
        title: 'ABULE',
        Image: 'images/product-03.jpg',
    },
    {
        music: 'hate-me',
        artistName: 'olamide ft wande coal',
        title: 'Hate me',
        Image: 'images/product-04.jpg',
    },
    {
        music: 'owo',
        artistName: 'olatop ekula',
        title: 'Owo',
        Image: 'images/product-11.jpg',
    },
    {
        music: 'rich-and-famous',
        artistName: 'olamide',
        title: 'Rich And Famous',
        Image: 'images/product-10.jpg',
    },
    {
        music: 'sitting-on-the-throne',
        artistName: 'olamide',
        title: 'Sitting on the throne',
        Image: 'images/product-09.jpg',
    },
];

// initial count

window.addEventListener('load', timeUpdate)

let song = 0;
let playing;
function playSong() {

    musicImage.classList.remove('pause');
    musicImage.classList.add('rotate');
    playBtn.classList.add('hide');

    pauseBtn.classList.remove('hide');
    playing = true;
    // songDuration.textContent = audio.duration


    audio.play();


};
function pauseSong() {

    musicImage.classList.add('pause');
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');

    playing = false;
    audio.pause();
};
function timeUpdate() {
    const { duration } = audio;

    const minute = (Math.floor(duration / 60));

    (minute < 9) ?
        songDurationMinute.textContent = `0${minute}` :
        songDurationMinute.textContent = minute;

    const seconds = Math.floor(duration % 60);
    
    (seconds < 9) ?
        songDurationseconds.textContent = `0${seconds}` :
        songDurationseconds.textContent = seconds;


};

//add event listenr for the control btns
btns.forEach((btn) => {
    btn.addEventListener('click', controls)
})

//function of the control btn
function controls(e) {
    const controlsBtn = e.currentTarget

    //next button
    if (controlsBtn.classList.contains('next')) {
       
        (song < songs.length - 1) ? song++ : song = 0;


        timeUpdate();

        audio.src = loadSongs(songs[song].music);
        artistName.textContent = songs[song].artistName;
        musicTitle.textContent = songs[song].title;

        musicImage.src = songs[song].Image;
        musicImage.classList.remove('pause');
        playSong();



        //   if (playing === true) {
        //            playSong()
        //   } else {
        //       pauseSong()
        //        }

    }
    //previous button
    if (controlsBtn.classList.contains('prev')) {


        (song > 0) ? song-- : song = songs.length - 1;

        timeUpdate()

        audio.src = loadSongs(songs[song].music);
        musicTitle.textContent = songs[song].title;
        artistName.textContent = songs[song].artistName;


        musicImage.src = songs[song].Image;
        musicImage.classList.remove('pause');
        playSong();


    };

    if (controlsBtn.classList.contains('add')) {
        audio.currentTime += 30.00

        playSong();

    };

    if (controlsBtn.classList.contains('sub')) {

        (audio.currentTime > 30) ? audio.currentTime -= 30 : audio.currentTime = 0;

    };

    //play button
    if (controlsBtn.classList.contains('play')) {

        const pause = musicImage.classList.contains('pause');


        (pause) ? playSong() : pauseSong()
        timeUpdate()


    };


};

// function loadSongs 
function loadSongs(track) {
    const music = `music/${track}.mp3`;

    return music;
};
function nextMusic() {



}
