// Sample series data (replace with actual series data)
const seriesData = [
    {
        title: "The Island Special",
        description: "The ninja's go on a mission to save Clutch!",
        image: "./IMG/images/content/the_island_cover.webp",
        trailer: "./img/trailers/special-.mp4",
        seasonUrl: "./videoplayer/specials/SPECIALNAME.html"
    },
    {
        title: "SPECIAL NAME",
        description: "",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-.mp4",
        seasonUrl: "./videoplayer/specials/SPECIALNAME.html.html"
    },
    {
        title: "SPECIAL NAME",
        description: "",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-.mp4",
        seasonUrl: "./videoplayer/specials/SPECIALNAME.html.html"
    },
    {
        title: "SPECIAL NAME",
        description: "",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-.mp4",
        seasonUrl: "./videoplayer/specials/SPECIALNAME.html.html"
    },
    {
        title: "SPECIAL NAME",
        description: "",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-.mp4",
        seasonUrl: "./videoplayer/specials/SPECIALNAME.html.html"
    },


    // Add more series objects as needed
];

// Function to dynamically populate the series list
function populateSeries() {
    const seriesList = document.querySelector('.series-list');
    seriesList.innerHTML = '';

    seriesData.forEach(series => {
        const seriesItem = document.createElement('div');
        seriesItem.classList.add('series');

        seriesItem.innerHTML = `
            <img src="${series.image}" alt="${series.title}">
            <h2>${series.title}</h2>
            <p>${series.description}</p>
        `;

        seriesItem.href = series.url;
        seriesItem.style.textDecoration = "none";

        const trailerBtn = document.createElement('button');
        trailerBtn.classList.add('trailer-btn');
        trailerBtn.innerText = 'Watch Trailer';
        trailerBtn.addEventListener('click', () => openTrailer(series.trailer));
        seriesItem.appendChild(trailerBtn);

        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Watch Season';
        seasonBtn.addEventListener('click', () => window.location.href = series.seasonUrl);
        seriesItem.appendChild(seasonBtn);

        seriesList.appendChild(seriesItem);
    });
}

// Function to open trailer in new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Populate series on page load
document.addEventListener('DOMContentLoaded', () => {
    populateSeries();
});
