const my_carousel_slide = document.querySelector('.my-carousel .my-carousel-slide');
var owl_nav_item = document.querySelectorAll('.owl-nav-item');

let width = my_carousel_slide.clientWidth;


for (let i = 0; i < owl_nav_item.length; i++) {
    owl_nav_item[i].addEventListener('click', (event) => { 
        slideMyCarousel(i);
    });
    
}

function slideMyCarousel(i) {
    let width = my_carousel_slide.clientWidth;
    let transformPos = width * i;

    my_carousel_slide.style.transform = "translateX(-" + transformPos + "px)";
    document.querySelector('.owl-nav-item.active').classList.remove('active');
    owl_nav_item[i].classList.add('active')
}