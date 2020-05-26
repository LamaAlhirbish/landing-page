/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
    let navbarItem = '';
    for (const section of sections) {
        const className = section.getAttribute('id');
        const data = section.getAttribute('data-nav');
        navbarItem += `<li class="${className}"> <a href="#${className}" class="menu__link"> ${data} </a> </li>`;
    }
    navbarList.innerHTML = navbarItem;
}

// Add class 'active' to section when near top of viewport
function activeSection() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        const className = section.getAttribute('id');
        const activeNavbar = navbarList.querySelector(`.${className}`);
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add('your-active-class');
            activeNavbar.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            activeNavbar.classList.remove('active');
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

// Set sections as active
document.addEventListener('scroll', activeSection);