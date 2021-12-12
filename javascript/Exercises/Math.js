var result;
result = Math.PI
// Rond
result = Math.round(5.6) // = 6 because round number to the close number
result = Math.round(2500.546) // = 2501
result = Math.pow(5,5) // power of the number is = 3125
// square method
result = Math.sqrt(81) // = 9 - 9*9 =81
// sin and cos
result = Math.sin(90*Math.PI / 180);
result = Math.cos(90*Math.PI / 180);
result = Math.max(1,2,3,4,5,6,7,8,9,20,30,5,100) // 100
result = Math.min(1,2,3,4,5,6,7,8,9,20,30,5,100) // 1

result = Math.round(Math.random()*1000)+1 // +1 increase the number 
 function getRndInteger(min, max){

 }
/*
 let names = ['jack','mike','joe','michael']
 result = getRndInteger(1,100)
 let getRange = getRndInteger(0,3)
 console.log(getRange)
 result = names[getRange]
  let guessNumber=3
  guessNumber === getRange? console.log('correct'):console.log('incorrect')
  console.log(result)
  */
  let names = ['jack','mike','joe','michael']
  result = Math.random()
  let numberRandom = getRandom(0,3)
  result = names[numberRandom]
  console.log(result)
//console.log(result)