var student = {
    firstName:'Jack',
    lastName:'Mike'
}

student.age=29 // add item to the object
student['scores'] = [1,2,3] // add scores to the object

//console.log(student.firstName)
//console.log(student.lastName)

const all={
    x:{}, // blank object
    y:2,
    z:3
}
all.x.k=4 // add item to the blank object
all.x.l=5 // add item to the blank object
all.y = 2
all.z = 3

console.log(all)

/*
Number()
parseInt()
toFixed()
isFinite()
parseFloat
*/
var number;
var price = 29.999
var number = Number('10') // convert to number 
var number = parseInt('20') // convert to number 
var number = parseFloat('10.40') // convert string to float number 
Result = isFinite('hello') // return true if data is a number 
Result = price.toFixed(2) // it fix the number to rounded number 29.999 = 30.00
console.log(Result)