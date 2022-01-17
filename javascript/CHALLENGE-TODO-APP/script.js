const itemsLeft = document.querySelector('.items-left');
const clearCompleted = document.querySelector('.items-clear span');





function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}
function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) =>{
        //console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) =>{
            items.push({
                id: doc.id,
                ...doc.data()
            })

        })
        generateItems(items);
    })
}
// delet items
function TestRemove(getEl){
    //  e.preventDefault();
      console.log(getEl.parentElement.parentElement.parentElement)
      getEl.parentElement.parentElement.parentElement.remove()
  }

function generateItems(items) {

    let itemsHTML ="";
    items.forEach((item) =>{
        itemsHTML += `
        <div class="todo-item">
                    <div class="check">
                        <div data-id="${item.id}"class="check-mark ${item.status == "completed" ? "checked":""}">
                            <img src="./assets/icon-check.svg">
                        </div>
                    </div>
                    <div class="todo-text ${item.status == "completed" ? "checked":""}">
                        ${item.text}
                    </div>
                    <button type="button" onClick="remove(this)">X</button>
        </div>
        `
        
    })

    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();
    //itemsCount(1);
    
}

//function itemsCount(number) {
    //itemsLeft.innerText = + itemsLeft.innerText + number;
    
//}
function createEventListeners() {
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark")
    todoCheckMarks.forEach((checkMark) =>{
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id); 
        })

    })
}
function markCompleted(id) {
    // it comes from a database
    let item = db.collection("todo-items").doc(id);
    item.get().then(function (doc) {

        if(doc.exists){
            let status = doc.data().status;
            if(status =="active"){
                item.update({
                    status: "completed"
                })
            } else if(status =="completed"){
                item.update({
                    status: "active"
                })
            }
        }
        
    })
    //console.log(id);
    //console.log("mark completed");
}
getItems();
const database = firebase.database();
const rootRef = database.ref('todo-items');

clearCompleted.addEventListener('click',(e) =>{
    e.preventDefault();
    rootRef(todo-items.value).remove();

});

/*
function remove() {
    var todoItem = document.getElementById('todo-input').value;
    database.ref(todo-items).remove();
}
*/

/*
document.querySelector('.items-clear').addEventListener('click',e=>{
    e.preventDefault();
    database.ref('todo-items/' + todo-item).remove()
    itemsHTML=""
})
*/

//var delet = document.querySelector('.items-clear').addEventListener('click', (e)=>{
  // e.preventDefault();
   //database.ref('todo-items').remove()
//});