// for in loop

let people = [
    {
        name:'Jack',
        age:20
    },
    {
        name:'Mike',
        age:23
    },
    {
        name:'Joe',
        age:22
    }
]
for(singleobject in people){
      people[singleobject].age=99
        people[singleobject].name = people[singleobject].name.toLocaleUpperCase()
         console.log(people[singleobject])
     }

     // for of
      for(let person of people){
    console.log(person,'for of')
 }

 let school = "intecbrussel"
 for(let letter of school){
     console.log(letter)

    }

    let student1 = {
        id:1,
        name:'joe dalton'
    }
    
    for(let val in student1){
        console.log(val)
        console.log(student1[val])
    }