//alert('Hello world!')
//document.write('<h1>Hello world! 2021</h1>');
//document.getElementById('intec').innerHTML = "<h1>Welcome to my website!</h1>";
//document.body.style.backgroundColor="tomato";

var myNum =10;
myNum

var number1 =10
var number2 = 20
var result = number1 + number2

var str1 = "intec"
var str2 = "Brussel"
result = str1 + str2

var brutto = 3000
var tax = brutto * 20 / 100
var netto = brutto - tax
result = netto

//var numx = 40
//numx++
//result = mum
 var a = 10
 a = a+1
 a +=1
 a = a * 2
 // power 
 var num1 = 5
 var num2 = 5
 result = a
 result = Math.pow(num1,num2) // power 3125
  var x1 = 5 // number
  var x2 = "5" // string 
  result = x1 + x2
   // bolean 
   result = 1 == 1 // true
   
   

//console.log(1===1) // true
//console.log(1>2) // false
//console.log(1==="1") // false
//console.log(1=="1") // true
//console.log(4<1) // false

const myDB =['SAMEER','Jamal','Kamal','Mike','Jack','Bob']
myDB[0]='Jago' // first item of array

console.log(myDB)
console.log(typeof myDB) // object

var Sameer = 'Sameer' // declaration
var Sameer = 'JAHANZEB' // redeclaration
var Sameer = 45
var Sameer = true // true
const Bob = 'Jack' // declaration
//const Bob = 'Mike' // redeclaration SyntaxError: Identifier 'Bob' has already been declared

// update
//Bob = 'Tom' // can not be updated SyntaxError: Identifier 'Bob' has already been declared

// let variable 
//let intec1 = 'Sameer'
//let intec1 = 'Ming' 

/*

var variable 
can be re declaration, update

const variable
can not be re-declaration or update

let variable
can not be re-declaration or updated

*/


let Jing = "Angelo"
Jing = "Banjan" // updated 

//let 66666jann = 'jang' // incorrect usage
//let $545jjj = 'Tang' // incorrect usage
//let company name = 'Jalot' // incorrect usage space should not be used in variable name
 var result = 10
 result ++ // increment = 11
 result --  // decrement = 10

 var students = ['x','y','Z','U']
 
 result = students.length

 var person = 20
 result = person == 18? 'yes he is allowed to drink alcohol':'No he is not allowed to drink alcohol'
 result = person >= 18? 'yes he is allowed to drink alcohol':'No he is not allowed to drink alcohol'


 var student = [{
   name:'Jack',
   age: 17
},
{
   name:'Mike',
   age: 17
}]
result = student.name != undefined ?(student.age >=18? 'yes he is allowed to drink alcohol':'no he is not allowed to drink alcohol'):'sudent name is undefined '

if (student[0].name == 'Jack' && student[0].age >=18 ){
   console.log('true')
}else {
   console.log ('not true')

}
if (student[1].age >= 18 && student[1].age <=30){
   console.log('young man!')
}else{
   console.log('not young man !')
}
var person = {
   firstName: 'Sameer',
   lastName: 'Dalton2',
   middelName:'Jack',
   age: 18,
   livingPlace: 'Alst1',
   isStudent : true,
   email: 'sameer@sameer.com'

}
if(person.age === 18 && person.livingPlace ==='Alst' && person.isStudent=== true){
   console.log(person)
}else if(person.lastName === 'Dalton'){
   console.log('lastname is correct !')

}else if (person.middelname ==='Jack'){
   console.log('living place is correct')
}else {
   console.log('The student dose not exist !')
}

var userInput = prompt('please enter a number!');
if(isNaN(userInput)){
   console.log('please enter a number!')
}else if(userInput%2 ==0){
   console.log('the number you entered is even number!')
}else if(userInput%2 ==1){
   console.log('the number you entered is odd number!')
}

var userInput = prompt('please enter a number!');
var test = isNaN(userInput)? 'This is not a number':(userInput%2 == 0? 'this is even number':'this is odd number');
console.log(test)

var getUser = document.getElementById('username')
var message = document.getElementById('message')
function MyMessage (){
   message.innerHTML = `Your message is: ${getUser.value}`
}

var number1 = document.getElementById('num1')
var number2 = document.getElementById('num2')
var result = document.getElementById('result')

function Calc (){
   var getresult = Number (number1.value) + Number(number2.value)
   result.innerHTML = `Sum is :${getresult}`
}
/*
const obj={
   a:1,
   b:'string data',
   c:true,
   d:[1,2,3],
   e:{id:1,title:'this is title'},
   f:function(){console.log('hello funciton')}
}
*/

//console.log(obj.e)

const result1 = document.getElementById('result2')

const AutoController = {   // turnLeft ... property value
    turnLeft : function(){result1.innerHTML='Turning left'},
    turnRight : function(){result1.innerHTML ='Turning right'},
    forward : function(){result1.innerHTML='Forward'},
    backward : function(){result1.innerHTML='backward...'},
}


