const span = document.querySelector("span")

let value = 0
let count = 100


let interval = setInterval(()=>{
    if(value < count) {
        value++
        span.textContent = value
        console.log(value)
    }
    else {
        span.textContent = value
        console.log("100 done")
        clearInterval(interval)
    }
    console.log("final")
},10)

