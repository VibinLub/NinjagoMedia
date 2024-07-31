// Sample mini-movies data (replace with actual data)
const miniMoviesData = [
    {
        title: "Ninjago Mini Movies",
        description: "The Mini Movies are the beginning of Ninjago, here you see characters like never seen before!",
        image: "./IMG/images/content/minimovies.webp",
        seasonUrl: "./videoplayer/specials/mini-movies/mini-movies.html"
    },
    // Add more mini-movies data here...
];

// Function to dynamically populate the mini-movies list
function populateMiniMovies() {
    const miniMoviesList = document.getElementById('mini-movies-list');
    miniMoviesList.innerHTML = '';

    miniMoviesData.forEach(miniMovie => {
        const miniMovieItem = document.createElement('div');
        miniMovieItem.classList.add('series');

        miniMovieItem.innerHTML = `
            <img src="${miniMovie.image}" alt="${miniMovie.title}">
            <h2>${miniMovie.title}</h2>
            <p>${miniMovie.description}</p>
        `;

        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Watch Mini-Movie';
        seasonBtn.addEventListener('click', () => window.location.href = miniMovie.seasonUrl);
        miniMovieItem.appendChild(seasonBtn);

        miniMoviesList.appendChild(miniMovieItem);
    });
}

// Function to open trailer in new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Populate mini-movies on page load
document.addEventListener('DOMContentLoaded', () => {
    populateMiniMovies();
});
