let control = document.getElementById('control')
let Light_control = false;
let lamp = document.getElementById('lamp')
let jumbo = document.getElementById('jumbo')

function switchLight (){
    if(!Light_control){
        Light_control = true
        control.src= 'control_off.png'
        lamp.src= 'on.png'
        jumbo.style.background ="black"

    }else{
        Light_control = false
        control.src = 'control_off.png'
        lamp.src = 'off.png'
        jumbo.style.background='#e9ecef'

    }
}