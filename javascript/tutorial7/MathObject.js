// Math object
var result;
result = Math.PI

// Round ()
result = Math.round(5.6) // result = 6 because it is close to 6
result = Math.round(2500.546) // result 2501
result = Math.pow(3,2) // 3x3 = 9
// square method
result = Math.sqrt(64) // 8

// sin and cos
result = Math.sin(90*Math.PI / 180);
result = Math.cos(90*Math.PI / 180);
// Max number
result = Math.max(5,6,7,8,9,1,0,1,2,3,1,4) // 9

// Min number
result = Math.min(5,6,7,8,9,1,0,1,2,3,1,4) // 0
 // random
 //0-1
 //0-9
 //0-10
 //10-100
 result = Math.round(Math.random()*100)+1 // +1 increase the number 
 function getRndInteger(min, max){

 }
 /*
  let names = ['jack','mike','joe','michael']
  result = getRndInteger(1,100)
  let getRange = getRndInteger(0,3)
  console.log(getRange)
  result = names[getRange]
  let guessNumber=1
  guessNumber === getRange? console.log('correct'):console.log('incorrect')
  console.log(result)
  */
let names = ['jack','mike','joe','michael']
result = Math.random()
let numberRandom =getRandom(0,3)
result = names[numberRandom]
console.log(result)