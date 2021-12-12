
var username = document.getElementById('user')
var email = document.getElementById('email')
var password = document.getElementById('password')

let students =[{
    username: 'Sameer',
    role: 'Admin',
    password: 'jamal',
    email: 'info@info.com'
},
{
    username: 'Jago',
    role: 'Admin',
    password: 'tarboz',
    email: 'info@info.com'
},
{
    username: 'Bob',
    role: 'user',
    password: 'banjan',
    email: 'info@info.com'
},
{
    username: 'Tom',
    role: 'Admin',
    password: 'khanjan',
    email: 'info@info.com'
}
]

function userCheck(){

    let GetUser = students.filter(function(user){return user.username === username.value && user.role =='Admin' && user.password === password.value})
        if(GetUser[0] != undefined) {

            test.innerHTML = "<h3>username and password is correct and it is Admin</h3>"
        }else{
            test.innerHTML = "<h3>username and password is incorrect and it is user!</h3>"
        }
}