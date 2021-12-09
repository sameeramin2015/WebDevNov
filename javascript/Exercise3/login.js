



 let username = document.getElementById('user')
 let password = document.getElementById('password')

const users=[{
    username: 'Atilla',
    password:1234,
    role: 'Admin'
},
{
    username: 'Sameer',
    role: 'Admin'
}]
// Check if user admin is 
/*function isAdmin (obj){
    return obj.role === 'Admin'? true:false
}
*/
// onclick action
function userChck(){
    // forEach loop
users.forEach(function(user){

if(user.username == username.value && user.role == 'Admin' && user.password == password.value){
    prompt('welcome to page, admin!')
}else{
    prompt('user and password is not correct!')
}
})
}