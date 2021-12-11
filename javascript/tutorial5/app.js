
var message = document.getElementById('message')
var getUserName = document.getElementById('username')
//console.log(message)
// message.innerHTML = "Text has been changed!"

function SayMyName(){
    //console.log(getUserName.value)
    message.innerHTML = `Your username is ${getUserName.value}`

}

SayMyName()


var number1 = document.getElementById('num1')
var number2 = document.getElementById('num2')
var getBtn = document.getElementById('btn')
var result = document.getElementById('result')

//console.log(result)

function DoCalc(){
    console.log('Hello test test')
    var sumResult = Number (number1.value) + Number(number2.value)
    console.log(sumResult)
    result.innerHTML =`Result is ${sumResult}` // innerHTML method put the result in to the html element
}
function Multiplication(){
    console.log('Hello test test')
    var sumResult = Number (number1.value) * Number(number2.value)
    console.log(sumResult)
    result.innerHTML =`Result is ${sumResult}` // innerHTML method put the result in to the html element
}
function Subtraction(){
    console.log('Hello test test')
    var sumResult = Number (number1.value) - Number(number2.value)
    console.log(sumResult)
    result.innerHTML =`Result is ${sumResult}` // innerHTML method put the result in to the html element
}

// Local variables and Global variables

// local variables

function GetNumber(){
    var companyName = 'intecbrussel'
    console.log(companyName, 'local variables')
}
GetNumber()
//console.log(companyName)

// global variables

 var companyName = 'intecbrussel' // global variable
 function GetNumber() {
     console.log(companyName,'global variable')
 }
 GetNumber()

 const Auto ={
     a : function(){
         console.log('hello')
     },
     b : function(){
        console.log('hello1')
    },
    getElementById : function(){
        console.log('getelementmethod')
    }
 }
 Auto.getElementById()
 Auto.a()

 const obj={
     a:1,
     b:'string data',
     c:true,
     d:[1,2,3],
     e:{id:1,title:'this is title'},
     f:function(){console.log('hello funciton')}
 }

 console.log(obj.e)
 obj.f()
 const result1 = document.getElementById('result')

 const AutoController = {   // turnLeft ... property value
     turnLeft : function(){result1.innerHTML='Turning left'},
     turnRight : function(){result1.innerHTML ='Turning right'},
     forward : function(){result1.innerHTML='Forward'},
     backward : function(){result1.innerHTML='backward...'},
 }
 //AutoController.backward() this funciton should be copied to button elements
 