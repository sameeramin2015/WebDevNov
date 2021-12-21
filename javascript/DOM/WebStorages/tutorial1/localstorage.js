/*

setItem()
getItem()
removeItem()
clear()
key()

*/

// localStorage

let name = 'jack'
let users = [1,2,3,4,5,6]
let people = [
    {
        id:1,
        username:'root'
    },
    {
        id:2,
        username:'admin'
    }
]
localStorage.setItem('name',name)
//localStorage.setItem('numbers',users)
// from object to string
localStorage.setItem('numbers',JSON.stringify(users))
/*
[1,2,3,4,5,6] = > "[1,2,3,4,5,6]"
*/

localStorage.setItem('people',JSON.stringify(people))

let result;



// from string to object
result = JSON.parse(localStorage.getItem('numbers'))

// string data type
result = localStorage.getItem('people')

// object data type
result = JSON.parse(localStorage.getItem('people'))

// result.forEach(user=>{
//     console.log(user)
// })

// localStorage.removeItem(0)
// localStorage.clear();
// console.log(result, typeof result)

window.addEventListener('DOMContentLoaded', (event) => {
   console.log(localStorage.getItem('people'))
   let listoftodos = JSON.parse(localStorage.getItem('people'))
   listoftodos.forEach(todo=>{
       console.log(todo)
       document.querySelector('.result').innerHTML+=`<p class="display-1">${todo.username}</p>`
   })
});
