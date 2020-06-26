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
let activeSection = document.querySelector(".your-active-class");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isElementVisible(element) {
  const details = element.getBoundingClientRect();
  if (
    details.bottom < 0 ||
    details.top > (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return false;
  } else {
    return true;
  }
}

function getVisibilityValue(element) {
  const details = element.getBoundingClientRect();
  const height = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0);
  if (details.top < 0) {
    return details.bottom;
  } else {
    if (details.bottom < height) {
      return details.bottom - details.top;
    } else {
      return height - details.top;
    }
  }
}

function findMostVisibleElement(elements) {
  let mostVisible = elements[0];
  let visibilityValue = getVisibilityValue(mostVisible);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const currVisibilityValue = getVisibilityValue(element);
    if (currVisibilityValue > visibilityValue) {
      mostVisible = element;
      visibilityValue = currVisibilityValue;
    }
  }
  return mostVisible;
}
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
function active() {
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const visibles = [];
    for (const section of sections) {
      if (isElementVisible(section)) {
        visibles.push(section);
      }
    }
    if (visibles.length > 0) {
      const mostVisible = findMostVisibleElement(visibles);
      if (mostVisible !== activeSection) {
        activeSection.classList.toggle("your-active-class");
        mostVisible.classList.toggle("your-active-class");
        activeSection = mostVisible;
      }
    }
  });
}
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
active();
