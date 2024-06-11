  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const dotsContainer = document.querySelector('.carousel-dots');

    // Function to create dots
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
                updateDots();
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Function to update dots
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function showSlide(n) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[n].style.display = 'flex'; // Show the selected slide
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    createDots(); // Create dots dynamically
    showSlide(currentSlide); // Show the first slide initially

    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});

