const span = document.querySelector("span")
const check = document.getElementById('check')

check.addEventListener('click', function(){
    
        document.body.classList.toggle('ladoo')
        document.getElementsByClassName('icon')[0].classList.toggle('fa-times')
    
    
})

let value = 0
let count = 100


let interval = setInterval(()=>{
    if(value < count) {
        value++
        span.textContent = value
        // console.log(value)
    }
    else {
        span.textContent = value
        // console.log("100 done")
        clearInterval(interval)
    }
    // console.log("final")
},15)
  