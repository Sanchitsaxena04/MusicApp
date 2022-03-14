
//Initializing the variables
let songindex = 0;
let audioElement= new Audio('1.mp3');
let myProgressbar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById("masterSongName");

let songs = [
    {songName:"Teri jhuki nazar-Shafqat Amanat Ali - Murder 3" , filePath:"1.mp3" , coverPath:"1.jpg"},
    {songName:"Tu hi mera mera - Pritam chakraborty- jannat2" , filePath:"2.mp3" , coverPath:"2.jpg"},
    {songName:"Emptiness - Tune mere jana- Album" , filePath:"3.mp3" , coverPath:"3.jpg"},
    {songName:"Deewani -kailash kher- Album" , filePath:"4.mp3" , coverPath:"4.jpg"},
    {songName:"You look perfect tonight- Ed sheran- Album" , filePath:"5.mp3" , coverPath:"5.jpg"},
    {songName:"See you again - Wiz khalifa ft. charlie puth- fast and furious" , filePath:"6.mp3" , coverPath:"6.jpg"},
    {songName:"Tu jaane na -Atif Aslam - Ajab prem ki gazab kahani" , filePath:"7.mp3" , coverPath:"7.jpg"},
    {songName:"Bulleya -Arijit singh - Aae dil hai mushkil" , filePath:"8.mp3" , coverPath:"8.jpg"},
    {songName:"Ranjhana- Shiraz uppal, jasvindar singh - Ranjhana" , filePath:"9.mp3" , coverPath:"9.jpg"},
    {songName:"Mera man - Ayushman khurana - nautanki sala" , filePath:"10.mp3" , coverPath:"10.jpg"},
    ]

songitems.forEach((element, i)=>{
   
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    })
    

//handling play/pause icons

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
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

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressbar.value = progress;
    
} )

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressbar.value*audioElement.duration)/100;
})


   const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    gif.style.opacity = 1;

    })
}
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{

            if(audioElement.paused ||audioElement.currentTime<=0){
                songindex = parseInt(e.target.id);
                makeAllPlays();
                mastersongname.innerText = songs[songindex-1].songName;
                audioElement.src = `${songindex}.mp3`;
                audioElement.play();
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                
            }

        else{
            songindex = parseInt(e.target.id);
            makeAllPlays();
            mastersongname.innerText = songs[songindex-1].songName;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            audioElement.src = `${songindex}.mp3`;
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
        
        })

        })
    
    

      
document.getElementById('previous').addEventListener('click' , ()=> {
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex = songindex-1;
    }
    audioElement.src = `${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.play();
    gif.style.opacity = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0;
    }
    else{
        songindex = songindex+1;
    }
    audioElement.src = `${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}) 