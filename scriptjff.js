// voeg de data van alle URL toe, alleen films, specials of afleveringen.
const pageURLs = [
    "index.html",
    "404.html",
    "jff.html",
    "movies.html",
    "series.html",
    "specials.html",
    "about.html",
    // Add more URLs as needed
];

// Function to redirect to a random page
function goToRandomPage() {
    const randomIndex = Math.floor(Math.random() * pageURLs.length);
    const randomURL = pageURLs[randomIndex];
    window.location.href = randomURL;
}

// Event listener for random page button
document.addEventListener('DOMContentLoaded', () => {
    const randomPageBtn = document.getElementById('randomPageBtn');
    randomPageBtn.addEventListener('click', goToRandomPage);
});