
const check = document.getElementById('check')

check.addEventListener('click', function(){
    
        document.body.classList.toggle('ladoo')
        document.getElementsByClassName('icon')[0].classList.toggle('fa-times')
    
    
})

const imgs = document.getElementsByClassName("img-carousel")
let i = 0;
document.getElementById("right-carousel").addEventListener("click", rightCarousel)
document.getElementById("left-carousel").addEventListener("click", leftCarousel)

function rightCarousel() {
        if(i === 1) {
                imgs[i].classList.add("img-carousel-hide");
                i = 0;
                imgs[i].classList.remove("img-carousel-hide")
        }
        else {
                imgs[i].classList.add("img-carousel-hide");
                i++;
                imgs[i].classList.remove("img-carousel-hide")
        }
}

function leftCarousel() {
        if(i === 0) {
                imgs[i].classList.add("img-carousel-hide");
                i = 1;
                imgs[i].classList.remove("img-carousel-hide")
        }
        else {
                imgs[i].classList.add("img-carousel-hide");
                i--;
                imgs[i].classList.remove("img-carousel-hide")
        }
}

setInterval(rightCarousel, 4000)

