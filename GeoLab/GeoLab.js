document.addEventListener('DOMContentLoaded', function() {
    const registrationBtn = document.getElementById('registration-btn');
    registrationBtn.addEventListener('click', function() {
        document.body.classList.toggle('black-background');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentSlide = 0;

    function showSlide(n) {
        
        slides.forEach((slide) => {
            slide.classList.remove('active', 'next', 'prev');
        });

        
        const nextSlideIndex = (n + 1) % slides.length;
        const prevSlideIndex = (n - 1 + slides.length) % slides.length;

        
        slides[n].classList.add('active');
        slides[nextSlideIndex].classList.add('next');
        slides[prevSlideIndex].classList.add('prev');

        
        updateDotColors(n);
    }

    function updateDotColors(n) {
        dots.forEach((dot, index) => {
            if (index === n) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide !== 0) {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide !== slides.length - 1) { 
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    });


    showSlide(0);


    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.querySelector('img').style.transform = 'scale(1.1)';
        });

        slide.addEventListener('mouseleave', () => {
            slide.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
