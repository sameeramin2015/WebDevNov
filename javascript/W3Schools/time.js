setInterval(getRealTime,1000)
function getRealTime(){
    var getDate = new Date();
    var result =`<h1>${getDate.getHours()}:${getDate.getMinutes()}:${getDate.getSeconds()}</h1>`
    document.getElementById('time').innerHTML = result
}
    
1
2
setInterval(getRealDate,1000)
function getRealDate(){
    var today = new Date();
    var date = `<h1>${today.getFullYear()}:${today.getMonth()}:${today.getDate()}</h1>`
    document.getElementById('dt').innerHTML = date
}