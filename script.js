//animation for container

document.addEventListener("DOMContentLoaded", function() {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.add('animate-up');
});

// animation
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.logo-track');
    const welcome1 = document.querySelector('.transaction-heading h1');
    const welcome2 = document.querySelector('.transaction-heading h4');
    const cards = document.querySelectorAll('.transaction-card');

    // animation for logo 
    logo.style.animation = 'zoomIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    logo.style.opacity = '1';

    // Animation for welcome text 
    logo.addEventListener('animationend', function() {
        welcome1.style.animation = 'fadeIn 0.5s ease-out';
        welcome1.style.opacity = '1';
    });

    welcome1.addEventListener('animationend', function() {
        welcome2.style.animation = 'fadeIn 0.5s ease-out';
        welcome2.style.opacity = '1';
    });

    // Animation for transaction cards
    welcome2.addEventListener('animationend', function() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 200); 
        });
    });
});
// Toggle sidebar visibility on overlay click
var overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    overlay.classList.toggle('active');
});
