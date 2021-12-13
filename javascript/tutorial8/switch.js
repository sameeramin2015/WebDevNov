// switch 
/*
switch(condition){
    case1: 
    //action
    break;
    case2:
    //action
    break;
}
*/
switch(90){
    case 1:
        console.log('incorrect')
        break;
    case 2:
        console.log('incorrect')
        break;
    case 90:
        console.log('correct')
        break;
    case 91:
        console.log('incorrect')
        break;
    default:
        console.log('default')
}

switch('Intecbrussel'){
    case 'Microsoft':
        console.log('Microsoft')
        break;
    case 'IBM':
        console.log('IBM')
        break;
    case 'Intecbrussel':
        console.log('Intecbrussel')
        break;
    default:
        console.log('default')
        

}
var secret = 6
switch (secret){
    case 1:
        console.log('secret')
        break;
    case 2:
        console.log('secret')
        break;
    default:
        console.log('default')
}
let today = new Date().getDay()
switch(today){
    case 0:
        console.log('Zondag')
        break;
    case 1:
        console.log('Maandag')
        break;
    case 2:
        console.log('Dinsdag');
        break;
    case 3:
        console.log('Woensdag');
        break;
    case 4:
        console.log('Donderdag');
        break
    case 5:
        console.log('Vrijdag');
        break;
    case 6:
        console.log('Zaterdag');
    
}
