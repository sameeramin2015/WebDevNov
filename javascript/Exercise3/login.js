


 var email = document.getElementById('email')
 var username = document.getElementById('user')
 var password = document.getElementById('password')

let users=[{
    username:'Atilla',
    password: 'atilla123',
    role: 'Admin',
    email:'sameer@sameer.com'
},
{
    username: 'Sameer',
    password: 'sameer123',
    role: 'Admin',
    email:'sameer@sameer.com'
    
},
{
    username: 'jamal',
    password: 'kamal',
    role: 'user',
    email:'sameer@sameer.com'
}
]
// Check if user admin is 
/*function isAdmin (obj){
    return obj.role === 'Admin'? true:false
}
*/

// onclick action
function userChck(){
    
    // forEach loop
    /*
 users.filter(function(user){

 if(user.username == username.value && user.password == password.value && user.role == 'Admin' && user.email == email.value ){
     test.innerHTML ='<h3>User and password is correct!</h3>'   
     }else{
    test.innerHTML ='<h3>User and password is incorrect!</h3>'
 }
 })
}
*/

let GetUser = users.filter(function(user){return user.username === username.value && user.password === password.value && user.role === 'Admin' && user.email === email.value})

if(GetUser[0] != undefined){
    test.innerHTML ='<h3>User and password is correct & it is admin!</h3>'
}else{
    test.innerHTML ='<h3>User and password is incorrect & it is user!</h3>'
}

}

/*
let sBricht;
function clickHandeler(){
    let getUser = arrayUsers.filter(user => user.name === eUserName.value && user.WW === eWachtwoord.value) // for singel item
    console.log(getUser[0])
}*/