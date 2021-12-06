var students = [
    {
        name: "Student1",
        score: 10
    },
    {
        name: "Student2",
        score: 8
    },

    {
        name: "Student3",
        score: 5
    },
    {
        name: "Student4",
        score: 3
    }
]

// #1 filter data
var updatedList = students.filter(function(obj){
    return obj.score >=5
})

//console.log(updatedList)

// #2 print obj.name 
    // use forEach method
// selector
var studentListEl = document.getElementById('students')

// foreach looping
updatedList.forEach(function(student){
    console.log(student,'studenttt')
    // print data in html
    studentListEl.innerHTML += `<li>${student.name} ${student.score}</li>`
})  
