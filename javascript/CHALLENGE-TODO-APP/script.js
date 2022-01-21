function addItem(event) {
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
    countAll()
    countCompleted();
    countActive();
}

function getItems() {
    db.collection("todo-items").onSnapshot((snapshot) => {
        //console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            })

        })
        generateItems(items);
        countCompleted();
        countActive();
    })
}
// count items from firebase
function countAll() {

    db.collection("todo-items")
        .get()
        .then(snap => {
            size = snap.size;
            document.getElementById("demo").innerHTML = size;
        });
}



function generateItems(items) {

    let itemsHTML = "";
    items.forEach((item) => {
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
                    <div class="binmarkwraper">           <div class="binmarkcont ${
                      item.status == "completed" ? "checked" : "nothing"
                    }"  data-id="${item.id}">
                    <span><img id="bin" src="./assets/bin.jpg" alt="" ></span>
                    </div></div>
        </div>
        `

    })

    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();


}
/*
function deleteOne(id) {
    let item = db.collection("todo-items").doc(id);
    item.delete();
    countAll();
  } 
*/

//----- start delete singel item-----
function createEventListeners() {
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
    let bins = document.querySelectorAll(".binmarkcont");

    todoCheckMarks.forEach(checkMark => {
        checkMark.addEventListener("click", function () {
            markCompleted(checkMark.dataset.id);
        });
    });
    bins.forEach(bin => {
        bin.addEventListener("click", function () {
            deleteOne(bin.dataset.id);
            countAll();
            countCompleted();
            countActive();
        });
    });
}

function deleteOne(id) {
    let item = db.collection("todo-items").doc(id);
    item.delete();

}
// ----- end of delete item-----

function markCompleted(id) {
    // it comes from a database
    let item = db.collection("todo-items").doc(id);
    item.get().then(function (doc) {

        if (doc.exists) {
            let status = doc.data().status;
            if (status == "active") {
                item.update({
                    status: "completed"
                })
            } else if (status == "completed") {
                item.update({
                    status: "active"
                })
            }
        }

    })
    //console.log(id);
    //console.log("mark completed");
}

function deletCompleted() {
    var item = db.collection("todo-items").where("status", "==", "completed");
    item.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            doc.ref.delete();
        });
        countAll();
        countCompleted();
        countActive();
    });

}

function deletAllItem() {
    var item = db.collection("todo-items")
    item.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            doc.ref.delete();

        });
        countAll();
        countCompleted();
        countActive();

    });

}


function countCompleted() {

    db.collection("todo-items").where("status", "==", "completed")
        .get()
        .then(snap => {
            size = snap.size;
            document.getElementById("demo3").innerHTML = size;
        });
}

function countActive() {

    db.collection("todo-items").where("status", "==", "active")
        .get()
        .then(snap => {
            sizea = snap.size;
            document.getElementById("active").innerHTML = sizea;
        });
}

document.getElementById('items-clear').addEventListener('click', function () {
    Swal.fire('Are you sure you want to delete it!')

});

//document.getElementById('allitem').addEventListener('click', function () {
//Swal.fire('Are you sure you want to delete all!')

//});
getItems();
countAll();
countCompleted();
countActive();