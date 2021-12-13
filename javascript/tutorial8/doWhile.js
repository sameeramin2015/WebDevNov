var i = 0

/*
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
*/
 do{
     console.log(i)
    console.log('hello')
   i++ // 0
 }while(i<9) // false it execute the loop

  while(i<1){ // false
         console.log(i,'hello while')
       i++
     } // dont execute 

 do{
     randomNumber = Math.floor(Math.random() * 100); // print random number between 0 till 100
     console.log(randomNumber)
 }while(randomNumber==50)
/*
var number;
 var sum=0

 do{
     number=Number(prompt('Enter a number!'))
     sum +=number;
     console.log('Sum Result',sum)

 } while(false)
*/
var password = "123456"
var rateLimit=3;

while(rateLimit>0){
    var askPassword = prompt("Enter your password!")
    rateLimit--;
    if(askPassword == password){
        console.log('welcome user!')
        break;
    }else{
        console.log(`You've ${rateLimit} attempts left.`)
    }
}
