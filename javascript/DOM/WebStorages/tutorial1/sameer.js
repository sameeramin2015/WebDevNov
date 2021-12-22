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
// convert from object to string
localStorage.setItem('numbers',JSON.stringify(users))// convert to real array 
localStorage.setItem('people',JSON.stringify(people))


let result;
// from string to objec
result = JSON.parse(localStorage.getItem('numbers'))
result = JSON.parse(localStorage.getItem('people')) 
result = localStorage.getItem(0)

//localStorage.removeItem(0)
//localStorage.clear();

window.addEventListener('DOMContentLoaded',(event)=>{
    console.log(localStorage.getItem('people'))
    let todoitem = JSON.parse(localStorage.getItem('people'))
    todoitem.forEach(todo => {
        console.log(todo)
        document.querySelector('.result').innerHTML += `<H1>${todo.username}</H1>`
        
    })
        
    
});

//console.log(result)

