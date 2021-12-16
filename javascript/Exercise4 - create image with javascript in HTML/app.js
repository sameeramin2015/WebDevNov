
let elGen = t => document.createElement(t) // funciton
let img = elGen ('img')
img.src = "test.png"
var display = document.getElementById('test')
display.appendChild(img);

console.log(img)


//document.getElementById('test').innerHTML ='<img src="test.png" height="500px" width= "500px"/>'
