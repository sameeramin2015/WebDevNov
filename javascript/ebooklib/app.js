var entyButton = document.getElementById('btn')
entyButton.addEventListener("click", displayInTable);

var row = 1
function displayInTable(){

var bookName = document.getElementById('book_name').value;
var bookAuthor = document.getElementById('book_author').value;
var bookCategory = document.getElementById('book_category').value;
var bookDate = document.getElementById('book_date').value;
var price = document.getElementById('price').value;

//if the cell are blank print an alert!
//if(!bookName || bookAuthor || bookCategory || bookDate || price){
    //alert("please fill the boxes");
    //return;
//}

// access table
var table = document.getElementById('tbl');
// create a new row
var newRow = table.insertRow(row);
//create new cells
var Cell1 = newRow.insertCell(0);
var Cell2 = newRow.insertCell(1);
var Cell3 = newRow.insertCell(2);
var Cell4 = newRow.insertCell(3);
var Cell5 = newRow.insertCell(4);
var Cell6 = newRow.insertCell(5);
// put input data to the cells
Cell1.innerHTML = bookName;
Cell2.innerHTML = bookAuthor;
Cell3.innerHTML = bookCategory;
Cell4.innerHTML = bookDate;
Cell5.innerHTML = price;
row ++;
}












var btnBook= document.getElementsByClassName('addbookbtn')

