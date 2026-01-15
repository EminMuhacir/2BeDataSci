document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Switching (Sliding Effect) ---
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const toggleIcon = document.getElementById('toggle-icon');
    const overlay = document.querySelector('.transition-overlay');
    const body = document.body;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Start the animation (Box slides in)
            overlay.classList.add('active');

            // Switch theme when the screen is fully covered (after 400ms)
            setTimeout(() => {
                body.classList.toggle('light-mode');

                // Toggle the icon (Sun <-> Moon)
                if (body.classList.contains('light-mode')) {
                    toggleIcon.classList.remove('fa-sun');
                    toggleIcon.classList.add('fa-moon');
                } else {
                    toggleIcon.classList.remove('fa-moon');
                    toggleIcon.classList.add('fa-sun');
                }
            }, 400); 

            // Clean up the class when animation ends (after 800ms)
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 800);
        });
    }

    // --- 2. Active Scroll Menu & Highlighting ---
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Offset for menu height (-150px) to trigger activation earlier
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            // Check if the link href includes the current section id
            if (a.getAttribute('href').includes(current)) {
                if (current !== "") a.classList.add('active'); 
            }
        });
    });

    // --- 3. Mobile Menu Open/Close ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            // Toggle menu visibility
            navList.classList.toggle('active');

            // Toggle menu icon (Bars <-> Times/X)
            if (navList.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close the menu when a navigation link is clicked
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                
                // Reset the icon back to bars
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
