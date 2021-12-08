//Comparison operators

// equal to operators

var result;
// equal to operator "==" check only value
result = 1 == 1 // true
result = 1 == 2 // false
result = 1 == "1" // true
result = 1 == 2 // false
result = "Intech" == 'Intech' // true
result = "Intech" == 'intech' // false
result = true == true // true
result = false == false // true
result = false == true // false
result = [] == [] // false
result = ['1'] == ['1'];// false
result = {} == {} // false
result = null == null // true
result = undefined == undefined // true
result = undefined == null // true
 // equal value and equal data type "===" check data type and value
 result = 1 === 1 // true
 result = 1 === "1" // false
 result = undefined === undefined // true
 result = undefined === null // false
 result = [] === [] // false
 result = "intec" === "intec" // false
 result = "Intec" === "intec" // false
 result = true === true // true
 result = false === false // true
 result = false === true // false 

 // not equal to "!=" check only value

 result = 1 != 1 //false
 result = 1 != 2 //true
 result = 1 != "1" //false
 result = 1 !== "1"  // true
 result = 'intec' != 'intec' // true
 result = [] != [] // true
 result = [1] != [1] // true
 result = {} != {} // true
 result = function(){} != function(){} // true
 var myFunc = ()=> console.log('hello') // arrow funciton
 var myFunc1 = function(){console.log('hello')} // function

 result = myFunc != myFunc1 // not equal -> true

 var a = 10
 var b = "10"

 result = a == b // true
 result = a === b // false
 result = a != b // false
 result = a !== b // true
 result = undefined == 0 // false
 result = undefined == null // true
 result = undefined === null  // false 

 // greater than operator ">" 
 result = 5 > 6 // false
 result = 0 > 0 // false
 result = -10 > 10 // false

 // less than operator "<"

 result = 6 < 3 // false
 result = 3 < 2.5 // false
 result = true > false // true because true=1 and false is = 0
 result = false < true // true

 // greater than or equal to operator

 result = 5 >= 6 // false
 result = 6 >= 6 // true
 result = 6 >="6" // true
 result = true >= false // true
 result = undefined >= null // false

 // less than or equal to operator "<"

 result = 10 <= 9 // false
 result = 9 <= 10 // false
 result = 9 <= "9" // true
 result = null <= null // true
 // myArr.lenght = 6
 // myArr1.lenght = 7
 var myArr = [1,2,3,4,5,6]
 var myArr1 = [1,2,3,4,5,6,7]


 var studentList = ['x','y','z']
 result = studentList.length

 result = myArr.length <= myArr1.length // true
  

 // logical operator
 // and operator "&&"

 result = 11>10 && 9<8 // false both condition must be true
 result = 10 <9 && 1==1 // false 
 result = 1==1 && 10>9 // true
 result = "" == "" && null == null // true
 result = "" == "" && null == undefined // true
 result = "" == "" && null === undefined // false

 // OR operator "||"
 result = 1===1 || 10>100 // true because in or operator one value should be true
 result = 1 != 10 || 1>10 // true
 result = 1>10 || 10>100 // false

 // NOT operator "!"
 result = !(1==1) // false return the opposite value
 result = !(1>10) // true
 result = (true == true) === (false == false) // true 
 result = !(true == true) === (false == false) // false

 // ternary operator
 result = 1==1 ? 'yes':'no'
 result = 10<1 ? 'INTEC':'BRUSSEL' //
 result = "computer" === "computer"? 'yes its true':'no its false'
 result = "computer" === "laptop"? 'yes its true':'no its false'
 result = 1 ===1? (2===2? 'yes':'no'):false
 /*
 his age is 18 allowed to drink alcohol
    true= 18 allowed to drink alcohol
    false = less than 18 not allowed to drink alcohol


 */

var person = 18
result = person == 18? 'yes he is allowed to drink alcohol':'no he is not allowed'
result = person <= 18? 'yes he is allowed to drink alcohol':'no he is not allowed'

/*
on other example
*/

var student = [{
    name:'Jack',
    age: 18
},
{
    name:'Mike',
    age: 18
}]


result = student.name != undefined ?(student.age >=18? 'yes he is allowed to drink alcohol':'no he is not allowed'):'student name is not exists';

//if(student.age[0])
if(student[1].name === 'Jack' && student[1].age >=18){
    console.log('True')
}
if(student[1].age >= 18 && student[1].age <=30){

console.log('Young man!')
}
else{
    console.log('not Young man!')
}


console.log(result)