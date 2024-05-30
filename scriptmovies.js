// Sample movie data (replace with actual movie data)
const moviesData = [
    {
        title: "The Lego Ninjago Movie",
        description: "Shunned by everyone for being the son of an evil warlord, a teenager seeks to defeat him with the help of his fellow ninjas.",
        image: "https://m.media-amazon.com/images/M/MV5BNDI3MDljMTQtYzBiYS00NDk2LTlhYzUtYmM0NWIyMmZkMDZkXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_.jpg",
        trailer: "./IMG/movie/trailer2.mp4"
    },
    // Add more movie objects as needed
];

// Function to dynamically populate the movie list
function populateMovies() {
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';

    moviesData.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie');

        movieItem.innerHTML = `
        
                <img src="${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
            </button>
            <button class="trailer-btn" onclick="openTrailer('${movie.trailer}')">Watch Trailer</button>
            <button class="trailer-btn" onclick="window.location.href='./videoplayer/movie/movie.html'">Go To Movie</button>
        `;

        movieList.appendChild(movieItem);
    });
}

// Function to open trailer in new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Populate movies on page load
document.addEventListener('DOMContentLoaded', () => {
    populateMovies();
});
