const movie = document.querySelector('#title')
const director = document.querySelector('#director')
const link = document.querySelector('#url')
const button = document.querySelector('#add-movie')
const table = document.querySelector('#films')


function TestRemove(getEl){
      console.log(getEl.parentElement.parentElement)
      getEl.parentElement.parentElement.remove()
  }

    button.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = {
        movie: movie.value,
        director: director.value,
        link: link.value

    }

    
        console.log(obj)
        let allmovies = JSON.parse(localStorage.getItem('Addtable-data'))
        allmovies.push(obj)
        localStorage.setItem('Addtable-data',JSON.stringify(allmovies))

        table.innerHTML += `<td>${obj.movie}</td>
        <td>${obj.director}</td>
        <td>${obj.link}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger" onClick="TestRemove(this)">Delete Movie</a></td>`
        
    })

    document.querySelector('#clear-films').addEventListener('click', e=>{
        e.preventDefault();
        table.innerHTML = ""

    })

    //window.addEventListener('DOMContentLoaded', (event) => {
        //let addTable = JSON.parse(localStorage.getItem('Addtable-data'))
        // addTable.forEach(addtbl=>{
        //     table1.innerHTML+=`
        //     <td>
        //     ${addtbl.movie} - ${addtbl.director} - ${addtbl.link}
        //     </td>
        //     `
        // })
     //});

