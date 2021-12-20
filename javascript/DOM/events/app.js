const book_category = document.querySelector('#book_category')
const addbookbtn = document.querySelector('.addbookbtn')
const book_name = document.querySelector('#book_name')
const legend = document.querySelector('legend')
//  onChange
book_category.addEventListener('change',e=>{
    e.preventDefault();
    console.log('hello something has been changed!!!!')
})

// click
addbookbtn.addEventListener('click',e=>{
    e.preventDefault();
    console.log('this is click event')
})

// mouseover event
book_name.addEventListener('mouseover',e=>{
    console.log('mouseover hello')
})

// mouseout
book_name.addEventListener('mouseout',e=>{
    console.log('mouse is away from html mouseout event!!!!')
    e.target.className= "form-control bg-light text-dark"
})

document.addEventListener('DOMContentLoaded',()=>{
    console.log('hello page has been loaded!!!!!')
    let db = JSON.parse(localStorage.getItem('movies'))
    db.forEach(movie=>{
        console.log(movie)
    })
})

addbookbtn.addEventListener('dblclick',e=>{
    document.body.className="bg-warning"
})

// book_name.addEventListener('keydown',e=>{
//     console.log(e)
//  //   console.log(book_name.value.length)
//     if(book_name.value.length >10){
//         alert('max character is 10')
//     }else{
//         console.log(book_name.value)
//     }
// })


// focus

book_name.addEventListener('focus',(e)=>{
    console.log('focusssssss')
    console.log(e.target.className)
    e.target.className= "form-control bg-dark text-light"
})


// select
book_name.addEventListener('select',e=>{
    console.log('SELECTED!!!!')
    legend.innerText = "SELECTED!"
})

// copy
book_name.addEventListener('copy',e=>{
    legend.innerText='DATA COPIED!'
})

// cut 
book_name.addEventListener('cut',e=>{
    legend.innerText='DATA CUTTED!'
})

// paste event
book_name.addEventListener('paste',e=>{
    legend.innerText='DATA PASTED!'
})
