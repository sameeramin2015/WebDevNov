let name = "jack"
let users = [1, 2, 3, 4, 5, 6]

let people = [
    {username:"john",  age:50, eyeColor:"blue"},
    {username:"ad", age:50, eyeColor:"red"}
]


// localStorage.setItem("name", name)
localStorage.setItem("people", JSON.stringify(people))

// let result;
// //from string to object
// //result = JSON.parse.getItem('numbers')
// //string datat type
// result = localStorage.getItem('people')
// //object data type
// result = JSON.parse(localStorage.getItem('people'))

// // / result.forEach(user=>{
// //     console.log(user)
// // })

// console.log(result, typeof result) 


window.addEventListener('DOMContentLoaded', (event) => {
  //  console.log(localStorage.getItem('people'))
    let listOfToDoes = JSON.parse(localStorage.getItem('people'))
    listOfToDoes.forEach(person=>{
        console.log(person)
        document.querySelector('.result').innerHTML += `<p class="display-3">${person.username}</p>`
    })
})