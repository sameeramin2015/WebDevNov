var num1 = 10
var num2 = 20

function Num1(){
    
    var result =  num1 + num2
    console.log(result)
    
    
 }
 
 Num1()

 function sumof (p1,p2){
    p1 + p2
 }
 console.log(8+9) // result 17

 function sayMyName (username){
    return "Hello your name is " + username
 }
 console.log(sayMyName('root'))

 var myStudent = ['Jack','Mike','Goerge']
 function getStudentName (getData){
    getData = ['Jack','Mike','Goerge']
    getData[0] = 'Sameer'
   console.log(getData)

 }
 getStudentName(myStudent)
 console.log(myStudent, 'original array') // original array

 function Layer1(number1){
    console.log("This is for layer1 function",number1)

    function Layer2(){
        console.log(number1+1, 'Layer2 function')
    }
    Layer2()
}

Layer1(5)

var myName = 'root'
function Keeper1(param){ // keeper1 send value to keeper1 and keeper 2 send it to printService
    return param;
}
function Keeper2(param){
    // param was root
    // `Your name is root
    return `Your name is ${param}`
}
function printService(param){
    console.log(param)
}
printService(Keeper2(Keeper1(myName)))

var myStudents = []
function addStudent(name){
    return myStudents.push(name) // add name to the array
}
addStudent ('Sameer')
addStudent ('Ender')
addStudent ('Romeo')
console.log(myStudents)

var myStudent = []

function addStudent(student){
    return myStudent.push(student)
}
const Student1_1 ={
    name: 'Mahmood',
    age: 28

}
const Student1_2 ={
    name: 'Romeo',
    age: 30

}
addStudent(Student1_1)
addStudent(Student1_2)

console.log(myStudent)
