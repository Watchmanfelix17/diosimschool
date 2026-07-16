document.addEventListener('DOMContentLoaded', () => {
    console.log("DIOSIMSchool Foundation Loaded Successfully.");

    // ==========================================
    // 1. ABOUT SECTION "READ MORE" TOGGLE
    // ==========================================
    const aboutToggleBtn = document.getElementById('about-toggle-btn');
    const aboutExtendedContent = document.getElementById('about-extended-content');

    if (aboutToggleBtn && aboutExtendedContent) {
        aboutToggleBtn.addEventListener('click', () => {
            aboutExtendedContent.classList.toggle('show');

            if (aboutExtendedContent.classList.contains('show')) {
                aboutToggleBtn.innerHTML = 'Read Less <span>&#8593;</span>';
            } else {
                aboutToggleBtn.innerHTML = 'Read Full Story <span>&#8595;</span>';
            }
        });
    }

    // ==========================================
    // 2. MOBILE NAVIGATION MENU
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        const navItems = navLinks.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

});

/* =========================================
   BACK TO TOP BUTTON LOGIC
   ========================================= */
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // If the user scrolls down more than 300 pixels
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        // If they scroll back to the top, hide it again
        backToTopButton.classList.remove('show');
    }
});

/* =========================================
   LIGHT/DARK MODE TOGGLE
   ========================================= */
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// 1. Check if the user previously saved a theme preference
const currentTheme = localStorage.getItem('theme');

// 2. If they preferred light mode, apply it immediately on load
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('bi-sun', 'bi-moon');
}

// 3. Listen for clicks on the button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the light-theme class on the body
    document.body.classList.toggle('light-theme');
    
    // Determine the current state and swap icons
    let theme = 'dark';
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
        themeIcon.classList.replace('bi-sun', 'bi-moon'); // Change to moon when light mode is active
    } else {
        themeIcon.classList.replace('bi-moon', 'bi-sun'); // Change to sun when dark mode is active
    }
    
    // Save the new preference to the browser's local storage
    localStorage.setItem('theme', theme);
});