let password = "123456";
let rateLimit = 3;

while(rateLimit>0){
    let askUser = prompt('Enter password');
    rateLimit--;
    if(rateLimit==0) break;
    if(askUser == password){
        console.log('welcome user')
    }else{
        console.log(`YOu have ${rateLimit} attempts left.`)
        break;
    }
}