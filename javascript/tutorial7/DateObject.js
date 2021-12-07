var result;
var date = new Date();
result = new (Date)
result = date.getFullYear()
result = date.getMonth()
 //toLocaleStrin
let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'} 
result = date.toLocaleString('nl-BE',options)
 // second , minutes , hours
 result = date.getSeconds();
 result = date.getMinutes();
 result = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


//console.log(result)