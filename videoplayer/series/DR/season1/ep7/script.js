// Sample previous and next URLs (replace with actual URLs)
const previousURL = "/videoplayer/series/Ninjago/season1/ep1/ep1.html";
const nextURL = "/videoplayer/series/Ninjago/season1/ep2/ep2.html";

// Function to navigate to previous page
function goToPrevious() {
    window.location.href = previousURL;
}

// Function to navigate to next page
function goToNext() {
    window.location.href = nextURL;
}

// Event listeners for navigation buttons
document.addEventListener('DOMContentLoaded', () => {
    const previousBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');

    previousBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);
});