
var result;
var date = new Date();
result = new(Date)
result = date.getFullYear()
result = date.getMonth()
result = date.getMinutes()
result = date.getSeconds()
let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'} 
result = date.toLocaleString('nl-BE',options)
console.log(result)