const span = document.querySelector("span")
const check = document.getElementById('check')

check.addEventListener('click', function(){
    
        document.body.classList.toggle('ladoo')
        document.getElementsByClassName('icon')[0].classList.toggle('fa-times')
    
    
})
