let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        }
    }
]
/*
function getSingleUser(username) {
    for (let i = 0; i < users.length; i++) {
        // console.log(i)
        //  console.log(username)
        //document.querySelector('tbody').innerHTML+=`<tr><td>${obj.username}</td></tr>`
        let obj = users[i];
        if (obj.username === username) {
            
            console.log(`Fullname: ${obj.name}\nEmail: ${obj.email}\nAddress: ${obj.address.street}, ${obj.address.city} ${obj.address.zipcode}\n---\n`)
            return `Fullname: ${obj.name}<br/>Email: ${obj.email}<br/>Address: ${obj.address.street}, ${obj.address.city} ${obj.address.zipcode}<br/>`
        } else {
            console.log('not found!')
        }
        //console.log(users[i]) // users[0] users[1] users[2]

    }

}
//getSingleUser('Samantha')
document.getElementById('result').innerHTML = getSingleUser('Samantha')
*/
for (i=0;i<users.length;i++){
    var getData =`Name :${users[i].name} Username: ${users[i].username} Email: ${users[i].email} Address: ${users[i].address.street} City: ${users[i].address.city}\n`
    test.innerHTML += getData + '<br>'+'<br>'
    console.log(getData)
}
//document.querySelector('tbody').innerHTML+=`<tr><td></td></tr>`