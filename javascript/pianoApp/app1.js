
const sounds =[65,83,68,70,71,72,74,75,76] 
let notes = document.querySelectorAll('audio')
let buttons = document.querySelectorAll('.key')

document.addEventListener('keydown',e=>{
    //console.log(e.key)
    const key = e.keyNumber
    if (e.key == "a"){
        PlayAudio(sounds[0])
    }
    if (e.key == "s"){
        PlayAudio(sounds[1])
    }
    if (e.key == "d"){
        PlayAudio(sounds[2])
    }
    if (e.key == "f"){
        PlayAudio(sounds[3])
    }
    if (e.key == "g"){
        PlayAudio(sounds[4])
    }
    if (e.key == "h"){
        PlayAudio(sounds[5])
    }
    if (e.key == "j"){
        PlayAudio(sounds[6])
    }
    if (e.key == "k"){
        PlayAudio(sounds[7])
    }
    if (e.key == "l"){
        PlayAudio(sounds[8])
    }






       
});
function PlayAudio(keyNumber){
    notes.forEach(audio =>{ // audio is parameter of the funciton
        let getKeyOfAudio = audio.getAttribute('data-key')
        //console.log(getKeyOfAudio)
        //audio.play()
        if(getKeyOfAudio == keyNumber){
            audio.play();
        }
    })
}


/*
document.addEventListener('keydown',e=>{
       
    })
    */