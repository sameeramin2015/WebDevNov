var names = ['jamal','kamal','sameer','sadiq']

var myArray = document.getElementById('array')

names.forEach(function(x,i){
    myArray.innerHTML += `<li>${x}</li>`

})