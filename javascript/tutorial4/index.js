/*
if contidion(){

} else{
    // result
}
*/

var person ={
    firstname: 'Joe',
    lastname:'Dalton1',
    middelname: 'Jakson',
    age:29,
    livingPlace: 'Aalst',
    isSudent: true,
    email: 'joe@joe.com'
}

if (person.age >= 18 && person.livingPlace === 'Aalst1' && person.isSudent === true){
    console.log(person) // return true
} 
else if(person.lastname === 'Dalton'){
    console.log('lastname is correct')
}
else if(person.middelname === 'Jakson'){
    console.log('middelname is correct')
}
else{
    console.log('no such person')
}

var userInput = prompt('Please enter a number'); 

if (isNaN(userInput)){ // isNAN not a number method
    console.log('this is not a number')   
}
else if (userInput%2 ==0){
    console.log('this is an even number')
} 
else if (userInput%2 !==0){
    console.log('this is an odd number')
}


/*
var test = isNaN(userInput)? 'This is not a number':(userInput%2 == 0? 'this is even number':'this is odd number');
console.log(test)
*/
