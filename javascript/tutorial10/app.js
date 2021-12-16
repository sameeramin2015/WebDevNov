//getElementId
let value;
//value = document.getElementById('todo-form')
//value.innerHTML="test"

// getelementbyTaqName
//value = document.getElementsByTagName('input') // return HTML collection

//value[0].innerHTML="it was an input"
//value.value = "alklsdjajdslk"

//value = document.getElementsByTagName('*')
//value.forEach(el=>{
    //console.log(el)
//})

//value = Array.from(value)

//function forEachFnction (el){
    //console.log(el)
   // el.remove()
//}
//value.forEach(forEachFnction) // value.forEach select all items in array
 // getElementByClassName
 //value = document.getElementsByClassName('card-body')
 //value = document.getElementsByClassName('*') // not working 

 // querySelector - return single item (first one)
 //value = document.querySelector('.card-header') // return only single element . it take the first one

 // querySelectorAll
 //value = document.querySelectorAll('.card-header') // return all elements
 const [first,second,third]= document.querySelectorAll('.card-header' ) // select first , scond and third of card-header elements


 // createElement()
 value = document.createElement('p')
 value.className="lead text-danger font-weight-bold"
 value.innerHTML="This is test paragraph"
 third.appendChild(value) // add value("This is test paragraph") to the third element

 // custom funtion for createElement
 let elGen = t => document.createElement(t) // function createElement 
 let findAll = selector => document.querySelectorAll(selector) // function find all elements in DOM
 value = elGen('div') // creat div element 
 value = elGen('a')
 value.href="google.com";
 value = findAll('div');

console.log(value)
