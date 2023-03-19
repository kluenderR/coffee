// referece buttons and nav overlay
const navOverlay = document.querySelector('.nav-overlay');
const openNavBtn = document.querySelector('.open-nav');
const closeNavBtn = document.querySelector('.close-nav');

// open mobile nav on click, close mobile nav on click
openNavBtn.addEventListener('click', navClickHandler);
closeNavBtn.addEventListener('click', navClickHandler);
// click open nav handler
function navClickHandler() {
    navOverlay.classList.toggle("hidden");
}