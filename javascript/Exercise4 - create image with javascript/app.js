let elGen = t => document.createElement(t)

let img = elGen ('img')
img.src = "test.png"
var display = document.getElementById('test')
display.appendChild(img);

console.log(img)
