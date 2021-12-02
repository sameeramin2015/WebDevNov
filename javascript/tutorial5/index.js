// example function

function funcName (){

}

function funcName1 (param1,param2,param3){
    console.log(param1,param2,param3)
}

//funcName1('string','44',[1,2,3,4])

//function sumofnumbers(){
//    var a = 5
//    return a
//}
//console.log(sumofnumbers())
/*
function sumofnumbers(){    
    console.log('before return keyword')
    return 5 + 5
    console.log('before return keyword') // unused
}
*/

var number1 = 10
var number2 = 20
//function sumofnumbers(){
//    return number1 + number2
//}
//function sumofnumbers(p1,p2){
//    return p1 + p2
//}

//console.log(sumofnumbers(50,40))

//console.log(sumofnumbers(number2,number1))

//function sayMyName(username){
//    return "Hello your name is " + username
//}
//console.log(sayMyName('root'))

//function sayMyName(username){
//    return `Hello your name is ${username}` // bacl tick key ``
//}
//console.log(sayMyName('root'))

//var myStudent = ['Jack','Mike','Goerge']

//function getStudentName (getData){
    //getData = ['Jack','Mike','Goerge']
//    getData[0] = 'Sameer'
//    console.log(getData)
//}
//getStudentName(myStudent)
//console.log(myStudent, 'original array')

/*
function Layer1(number1){
    console.log("This is for layer1 function",number1)

    function Layer2(){
        console.log(number1+1, 'Layer2 function')
    }
    Layer2()
}

Layer1(5)
*/
/*
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
*/
/*
var myStudents = []

function addStudent(name){
    return myStudents.push(name) // add name to the array
}
addStudent ('Sameer')
addStudent ('Ender')
addStudent ('Romeo')
console.log(myStudents)

*/

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

//function params : brutosalary , tax
    // match calc here


    /*
    function Netto(){ // without parameter

        var brutto = 3000 
        var tax = brutto * 20 / 100
        var netto= brutto - tax
        return netto

    }
    console.log(Netto())
    */
    /*
    let getNettoSalary = (2000*25)/100 // exact tax amount
    console.log(2000-getNettoSalary)
    */

    function getNettoSalary(bruto,tax){ // with parameter

        let taxAmount = (bruto*tax)/100 // tax amount
        //console.log(taxAmount)
        return bruto - taxAmount // 2000 -500

    }
    console.log(getNettoSalary(3000,20))

    

