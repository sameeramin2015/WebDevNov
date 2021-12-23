const btns = document.querySelectorAll('.btn')
const counter = document.querySelector('#counter')


btns.forEach((btn) =>{
    console.log(btn)
    btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList 
    if (styles.contains('increase')){
        counter.innerHTML++
    } else if(styles.contains('decrease')){
        counter.innerHTML--
    } else{
        counter.innerHTML = 0
    }
    window.localStorage.setItem("result", counter.innerHTML)
    })
    
   /*
    if(localStorage.getItem("result")){ // if we refresh the page the counter not be deleted
        counter.innerHTML = localStorage.getItem("result") 
    }
    */
    
})