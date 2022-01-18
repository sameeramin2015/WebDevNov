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
    //countAll()
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
// count items from firebase
function countAll() {
    console.log("runningcountAll");
    db.collection("todo-items")
      .get()
      .then(snap => {
        size = snap.size;
        document.getElementById("demo").innerHTML = size;
      });
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
                    <span id="spn" onClick="remove(this)">X</span>
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
function deletAllItem() {
    var item = db.collection("todo-items").where("status", "==", "completed");
    item.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
      countAll();
    });
    console.log("itemMC" + JSON.stringify(item));
  }
getItems();
countAll();


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