setInterval(getRealTime,1000)
function getRealTime(){
    var dateObj = new Date();
    let getTim = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
    document.getElementById('time').innerHTML = getTim
    console.log(getTim)
}
getRealTime()