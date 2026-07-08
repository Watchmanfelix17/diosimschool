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