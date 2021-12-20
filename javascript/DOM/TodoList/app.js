const [todo]= document.querySelectorAll('input')
const addDate =document.querySelector("#filter")
const Addbtn = document.querySelector('.btn') // css selector .btn

let toDo =[]
const ulToDo = document.querySelector('.list-group')
console.log(Addbtn)

function RemoveItem(getEl){
    //  e.preventDefault();
      console.log(getEl.parentElement.parentElement)
      getEl.parentElement.parentElement.remove()
  }

Addbtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(todo,addDate,Addbtn)
    let obj = {
        todo: todo.value,
        addDate: addDate.value,
        
    }

    console.log(obj);
    toDo.push(obj)
    console.log(toDo)
    ulToDo.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">${obj.todo}<a href="#" class="delete-item"><i class="fa fa-remove" onClick="RemoveItem(this)"></i></a>
    </li>
    <li class="list-group-item d-flex justify-content-between">${obj.addDate}<a href="#" class="delete-item"><i class="fa fa-remove" onClick="RemoveItem(this)"></i></a>
    </li>`
    
});



document.querySelector("#clear-todos").addEventListener('click',e=>{
    e.preventDefault();
    ulToDo.innerHTML=""
})