const backBtn = document.querySelector('.backBtn');
const list = document.querySelector('.list-Btn');
const musicImage = document.getElementById('track-image');
const artistName = document.querySelector('.artist');
const musicTitle = document.querySelector('.song-title');
const time = document.querySelector('.time');
const btns = document.querySelectorAll('.controlBtn');
const audio = document.getElementById('audio');

// console.log(audio.control)

//music file
//images and song titles

const songs = [
    {
    music:'abule',
    artistName: 'patoranking',
    title:'ABULE',
    Image: 'images/product-03.jpg'

},
    {
    music:'hate-me',
    artistName: 'olamide ft wande coal',
    title:'Hate me',
    Image: 'images/product-04.jpg'
    

},
    {
    music:'owo',
    artistName: 'olatop ekula',
    title:'Owo',
    Image: 'images/product-11.jpg'


},
    {
    music:'rich-and-famous',
    artistName: 'olamide',
    title:'Rich And Famous',
    Image: 'images/product-10.jpg'
    ,

},
    {
    music:'sitting-on-the-throne',
    artistName: 'olamide',
    title:'Sitting on the throne',
    Image: 'images/product-09.jpg'


},
]

// initial count 
let song = 0
//  function playSong() {
//         audio.play()
//         console.log('play');
// }
//     function pauseSong() {
//         audio.pause()
//         console.log('pause');
// }
// const play = document.querySelector('.play')
//     play.addEventListener('click', () => {
//         const pause = musicImage.classList.contains('pause')
//         console.log(pause);
//         if (pause) {
//             musicImage.classList.remove('pause')
//             musicImage.classList.add('rotate')
        
//            playSong()
//         } else {
//             musicImage.classList.add('pause')
            
//             pauseSong()
//         }
//        })

//add event listenr for the control btns
btns.forEach((btn) =>{
    btn.addEventListener('click',controls)
})

//function of the controll btn
function controls(e){
   const controlsBtn = e.currentTarget
   // makes the music image rotate
   musicImage.classList.add('rotate')

//    console.log(audio);

   //next button
   if(controlsBtn.classList.contains('next')){
    song++
    if(song > songs.length-1){
        song =0
    }
    audio.src=loadSongs(songs[song].music);
    // console.log(audio.src);
    artistName.textContent = songs[song].artistName;
    musicTitle.textContent=songs[song].title;
    musicImage.src= songs[song].Image;
    musicImage.classList.remove('pause')

 

   }
   //previous button
   if(controlsBtn.classList.contains('prev')){

    song--
    
    if(song < 0){
        song = songs.length-1
    }
    audio.src=loadSongs(songs[song].music)
    artistName.textContent = songs[song].artistName
    musicTitle.textContent=songs[song].title
    musicImage.src= songs[song].Image
    musicImage.classList.remove('pause')

   }
   if(controlsBtn.classList.contains('add')){
    
    audio.play()
    loadSongs(songs[song].music);
    musicImage.classList.remove('pause')
}
   
//play button
    if (controlsBtn.classList.contains('play')) {
        const pause = musicImage.classList.contains('pause')
        // console.log(pause);
      const playBtn=  document.querySelector('.play')
        if (pause) {
            musicImage.classList.remove('pause')
            musicImage.classList.add('rotate')
            playBtn.textContent = 'pause';
            console.log(audio.duration/60);


        
            audio.play()
        } else {
            musicImage.classList.add('pause')
             playBtn.textContent='play'
            
            
            audio.pause()
        }

        
    //     const playing = musicImage.classList.add('rotate')
    //     if (playing){
    //        pauseSong()
    //     } else {
    //         playSong()
    //     }
    
       
    //     const play = audio.play();
    //     const pause = audio.pause();
    //     console.dir(audio)
        
    // console.log(typeof pause);
    
    // if(play){
    //     console.log('play');
    //    return pause
    //     // musicImage.classList.add('pause')
    //     // musicImage.classList.remove('rotate')

    //     // console.log(typeof pause);


    // } else {
    //     play
    // }
    
    
    ;
    
   }
// console.log(songs[song]);
//    console.log(controlsBtn);
}

// function loadSongs 
function loadSongs(track){
    const music = `music/${track}.mp3`
return music
}
// console.log(loadSongs(songs[song].music))

// function names(e){
//     console.log(e);
// }
// list.addEventListener('timeupdate',names)
// console.log(document)

// update time 
console.log(audio.timeupdate);