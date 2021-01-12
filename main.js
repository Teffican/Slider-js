window.addEventListener('DOMContentLoaded', () => {
    slider();
});

function slider() {
    const slides = document.querySelectorAll('.slider__item'),
        dots = document.querySelectorAll('.slider__dot'),
        btnPrev = document.querySelector('.slider__btn-prev'),
        btnNext = document.querySelector('.slider__btn-next');

    let slideIndex = 1;
    showSlides(slideIndex);

    
    btnNext.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    
    btnPrev.addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    });

    dots.forEach((item, i) => {
        item.addEventListener('click', () => {
            showSlides(slideIndex = i + 1);
        });
    });


    function showSlides(n) {
        
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => {
            item.classList.remove('active-slide');
        });
        dots.forEach(item => {
            item.classList.remove('active-dot');
        });
        
        
        slides[slideIndex - 1].classList.add('active-slide');
        dots[slideIndex - 1].classList.add('active-dot');
        
    }
}