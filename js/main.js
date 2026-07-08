document.addEventListener('DOMContentLoaded', () => {
    console.log("DIOSIMSchool Foundation Loaded Successfully.");
    
    // ==========================================
    // 1. ABOUT SECTION "READ MORE" TOGGLE
    // ==========================================
    
    // Step A: Grab the HTML elements we need to manipulate
    const aboutToggleBtn = document.getElementById('about-toggle-btn');
    const aboutExtendedContent = document.getElementById('about-extended-content');

    // Step B: Ensure the elements actually exist on the page to prevent console errors
    if (aboutToggleBtn && aboutExtendedContent) {
        
        // Step C: Listen for a 'click' on the button
        aboutToggleBtn.addEventListener('click', () => {
            
            // Toggle the 'show' class on the hidden content. 
            // (If it's hidden, this reveals it. If it's revealed, this hides it.)
            aboutExtendedContent.classList.toggle('show');

            // Step D: Change the text and arrow direction based on its current state
            if (aboutExtendedContent.classList.contains('show')) {
                // If it is currently showing, change text to "Read Less" with an up arrow
                aboutToggleBtn.innerHTML = 'Read Less <span>&#8593;</span>'; 
            } else {
                // If it is hidden, change text back to "Read Full Story" with a down arrow
                aboutToggleBtn.innerHTML = 'Read Full Story <span>&#8595;</span>'; 
            }
        });
    }

    // ==========================================
    // Future logic for the Mobile Navigation Menu
    // ==========================================
    
    // ==========================================
    // Future logic for the WhatsApp redirect
    // ==========================================
});