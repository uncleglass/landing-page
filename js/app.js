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
function buildTheNav() {
  const sections = document.querySelectorAll("section");
  const fragment = document.createDocumentFragment();
  for (const section of sections) {
    const newListElement = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.innerText = section.dataset.nav;
    newLink.href = "#" + section.id;
    newLink.className = "menu__link";
    newListElement.appendChild(newLink);
    fragment.appendChild(newListElement);
  }
  const navbarList = document.querySelector("#navbar__list");
  navbarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildTheNav();
// Scroll to section on link click

// Set sections as active
