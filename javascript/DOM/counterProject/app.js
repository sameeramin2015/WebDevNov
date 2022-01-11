const btns = document.querySelectorAll('.btn')
const counter = document.querySelector('#counter')

let count = 0

btns.forEach((btn) =>{
    console.log(btn)
    btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList 
    if (styles.contains('increase')){
        count++
    } else if(styles.contains('decrease')){
        count--
    } else{
        count = 0
    }
    window.localStorage.setItem("result", counter.innerHTML)

    counter.textContent = count
    

    })
    
if(localStorage.getItem("result")){
    counter.textContent = localStorage.getItem("result") 
}
})




