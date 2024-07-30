// Sample previous and next URLs (replace with actual URLs)
const previousURL = "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep7/player1_url.html";
const nextURL = "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep9/player1_url.html";

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