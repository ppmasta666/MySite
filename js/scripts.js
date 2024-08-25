document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const offerteForm = document.querySelector('#offerte form');
    offerteForm.addEventListener('submit', function(e) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        if (!name || !email) {
            e.preventDefault();
            alert('Vul alstublieft alle verplichte velden in.');
        }
    });

    // Zoomable Images
    const images = document.querySelectorAll('.zoomable');
    images.forEach(image => {
        image.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
    });

    // Animation on Scroll
    const animateOnScroll = () => {
        const slideInElements = document.querySelectorAll('.slide-in');
        const zoomInElements = document.querySelectorAll('.zoom-in');
        const fadeInElements = document.querySelectorAll('.fade-in');

        const handleScrollAnimation = (elements, animationClass) => {
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.classList.add(animationClass);
                }
            });
        };

        handleScrollAnimation(slideInElements, 'animated');
        handleScrollAnimation(zoomInElements, 'animated');
        handleScrollAnimation(fadeInElements, 'animated');
    };
    window.addEventListener('scroll', animateOnScroll);

    // Contact Form Validation
    const contactForm = document.querySelector('#offerte form');
    const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    contactForm.addEventListener('submit', function(e) {
        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            e.preventDefault();
            alert('Voer een geldig e-mailadres in.');
        }
    });

    // Handle dropdown menu click for mobile devices
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Search Bar Functionality
    const searchBar = document.querySelector('.search-bar form');
    searchBar.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = document.querySelector('.search-bar input').value.toLowerCase();
        if (!query) {
            alert('Voer een zoekterm in.');
            return;
        }
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    });

    // Display Search Results on search.html
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    if (searchQuery) {
        const contentSections = document.querySelectorAll('main section, main div');
        const resultsContainer = document.getElementById('results-container');
        let resultsFound = false;

        contentSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(searchQuery)) {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = section.innerHTML;
                resultsContainer.appendChild(resultItem);
                resultsFound = true;
            }
        });

        if (!resultsFound) {
            resultsContainer.innerHTML = '<p>Geen resultaten gevonden.</p>';
        }
    }

    // Mobile-friendly top bar
    const logo = document.querySelector('header .logo');
    logo.addEventListener('click', function() {
        const header = document.querySelector('header');
        header.classList.toggle('active');
    });
});
