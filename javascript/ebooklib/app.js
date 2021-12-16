
document.getElementById('book_name')
document.getElementById('book_author')
document.getElementById('book_category')
document.getElementById('book_date')
document.getElementById('price')
document.getElementsByClassName('addbookbtn')



function displayInput(){
    //console.log(getUserName.value)
    message.innerHTML = `Your username is ${getUserName.value}`

}

displayInput()