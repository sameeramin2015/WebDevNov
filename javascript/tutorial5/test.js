var message = document.getElementById('result')
var text = document.getElementById('para')
var getText = document.getElementById('input')

function textChange(){
    result.innerHTML=`Your message is: ${getText.value}`
}
function ChangeParagraph(){
    para.innerHTML = "Paragraph text has been changed !!!!"
    document.getElementById('para').style.fontSize="35px"
    document.getElementById('para').style.fontFamily="Arial"
    document.getElementById('para').style.fontStyle="italic"
    document.getElementById('para').onclick = changeColor; 
    
}
// change color function
function changeColor() {
    document.body.style.color = "red";
    return false;
} 

var number1 = document.getElementById('num1')
var number2 = document.getElementById('num2')
var button = document.getElementById('btn')
var reult = document.getElementById('result1')

function CalcSum (){
    var numResult = Number(number1.value) + Number(number2.value)
    result1.innerHTML=`Sum is:${numResult}`

}

const result2 = document.getElementById('result2')

const changDirection = {

    turnLeft:function (){result2.innerHTML='TurnLeft'},
    turnRight:function (){result2.innerHTML='TurnRight'},
    forward:function (){result2.innerHTML='forward'},
    backward:function (){result2.innerHTML='backward'},

}
changDirection.backward
1 != true


1 != true