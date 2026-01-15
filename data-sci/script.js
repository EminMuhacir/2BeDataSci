document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme swap ---
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const toggleIcon = document.getElementById('toggle-icon');
    const overlay = document.querySelector('.transition-overlay');
    const body = document.body;

    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            
            // Start animation 
            overlay.classList.add('active');

            // When the box closes the screen (after 400ms) 
            setTimeout(() => {
                body.classList.toggle('light-mode');

                // Change icon
                if (body.classList.contains('light-mode')) {
                    toggleIcon.classList.remove('fa-sun');
                    toggleIcon.classList.add('fa-moon');
                } else {
                    toggleIcon.classList.remove('fa-moon');
                    toggleIcon.classList.add('fa-sun');
                }
            }, 400); 

            // When animation ends (after 800ms)
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 800);
        });
    }

    // --- 2. Scroll menu activation ---
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // -150px, menü yüksekliği payı
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                if(current !== "") a.classList.add('active'); 
            }
        });
    });
});

/* --- 3. Mobile menu open/close --- */
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

    if(mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            // Menu open/close
            navList.classList.toggle('active');

            // Icon change
            if (navList.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // When a nav link is clicked, close the menu
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Mobile only: close the menu
                navList.classList.remove('active');
                
                // Change icon back to bars
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }