let control = document.getElementById('control')
let light_control = false;
let lamp = document.getElementById('lamp')
let jumbo = document.getElementById('jumbo')

function lightSwitch(){
    if(!light_control){// true
        light_control= true
        console.log('Lamp is on!!!!')
        control.src='control_on.png'
        lamp.src='on.png'
        jumbo.style.background='black'
    }else{
        light_control=false
        console.log('Lamp is off!!!!')
        control.src='control_off.png'
        lamp.src='off.png'
        jumbo.style.background='#e9ecef'
    }
}

