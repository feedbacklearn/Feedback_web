// JavaScript code to control scrolling
const scrollContent = document.getElementById('scroll-content');
const items = Array.from(scrollContent.children);
let currentItemIndex = 0;

function scrollItems() {
    items[currentItemIndex].classList.remove('visible');
    currentItemIndex = (currentItemIndex + 1) % items.length;
    items[currentItemIndex].classList.add('visible');
    
    // Check if we have reached the last item, and loop back to the first item
    if (currentItemIndex === items.length - 1) {
        items[0].classList.add('visible');
    }
}