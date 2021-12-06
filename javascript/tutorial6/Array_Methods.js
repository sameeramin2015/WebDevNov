/*
toString
join
pop
push
*/
/*
var myBooks = ['book1','book2','book3','book4','book5']
// toString
var Result;
Result = myBooks.toString()
// push method
myBooks.push('book6') // insert new array item at the end of array
Result = myBooks

// pop methd
myBooks.pop() // delet the last item of array

// join method
Result = myBooks.join(" and ") // adding extra item between the items
myBooks.shift() // delet first array item
*/
//Result = myBooks.slice(0,2)

//Result = myBooks.slice(3,myBooks.length)

// concat
//var n1 = [1,2,3,4,5,6,7]
// var n2 = [8,9]
//Result = n1.concat([8,9])
//var names = ['khaled','romeo','bart','atilla'];
//Result = names.splice(2,1)
//var randomNumbers = [55,55,99,77,88,55,22,]
//Result = randomNumbers.sort(function(a,b){return a-b}) // a-b sort from end

// for each
//randomNumbers.forEach(function(num){
    //console.log()
    //console.log(num + 5,"extra") // js you have only access here
//})

/* some method
var myArrayList = [1,2,3,4,5,6,7,8,9]
Result = myArrayList.some(function(n){
    return n > 10 // true // false
})

var randomNumbers = [5,6,10,55,33,88,99]
var userGuess= 16
var guess = randomNumbers.some(function(n){
    return n === userGuess

})
console.log('you won');console.log('you lost')
*/
let numbers = [77,77,77]
let _numbers= [66,55,77]
result = _numbers.every(function(value){
    return value === 66
})

//map array 
result =numbers.map(function(val){
    return val // only extract data
})

// filter method 
result = _numbers.filter(function(val){
    return val >=66 // extract sepcific item
})

var student =[{
    id:1,
    name:'Jack',
    course:'Javascript',
    score:50,
},
{
    id:2,
    name:'Mike',
    course:'Phyton',
    score:80,
},
{
    id:3,
    name:'Jan',
    course:'HTML',
    score:90,
}
]
result = student.filter(function(x){
    return x.course === 'Javascript' // filter specific item in array
})

function findHwoPassedExam(param){
    let result = param.filter(function(value){
        return value.score >=50

    })
    return result
}

// inclute method

var myNumbers =[3,4,5,6,7,8,9,5,5,677,55,44]
result = myNumbers.includes(8) // check if the number exist in array return true or false

function isNumberExists(number){
    let result = myNumbers.includes(number) // includes method return true or false
    if (result){
        console.log('this number is in array')
    }else{
        console.log('this number is not in array')
    }
}

// reverse method 
isNumberExists(8)
result = myNumbers.reverse()
console.log(result);

