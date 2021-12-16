//let allbuttons = document.querySelectorAll('.key')
/*
allbuttons.forEach(el=>{
    console.log(el)
    console.log(el.getAttribute('data-key'))
    // set action
    el.addEventListener('click',function(e){
        console.log('click')
        //play
        
       let note = document.querySelectorAll("audio")
       note.forEach(audio => {
           if(audio.dataset.key === el.dataset.key){
               audio.play()
           }
       })
    })
    
})
*/

let notes = document.querySelectorAll('audio')
let buttons = document.querySelectorAll('.key')

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
buttons.forEach(el=>{
    el.addEventListener('click',function(e){ // addEventListener is a method it call an action
        e.preventDefault()
        let getKey = el.getAttribute('data-key')
        PlayAudio(getKey) // 70 // 75
    })
})