// Sample series data (replace with actual series data)
const seriesData = [
    {
        title: "Pilot Movies",
        description: "The original pilot episodes that introduced the LEGO Ninjago series.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-pilot.mp4",
        seasonUrl: "./videoplayer/specials/pilot-movies.html"
    },
    {
        title: "Mini Movies",
        description: "Short mini-movies that further explore the Ninjago universe.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-mini-movies.mp4",
        seasonUrl: "./videoplayer/specials/mini-movies.html"
    },
    {
        title: "Chen Mini Movies",
        description: "A series of short films featuring the character Chen and his adventures.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-chen-mini-movies.mp4",
        seasonUrl: "./videoplayer/specials/chen-mini-movies.html"
    },
    {
        title: "The Tall Tales of Misfortune's Keep",
        description: "Short episodes that delve into the backstory of Misfortune's Keep and its crew.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-misfortunes-keep.mp4",
        seasonUrl: "./videoplayer/specials/tall-tales-misfortunes-keep.html"
    },
    {
        title: "Dark Island Trilogy",
        description: "A trilogy of books that are canon to the LEGO Ninjago story, though hard to find.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-dark-island.mp4",
        seasonUrl: "./videoplayer/specials/dark-island-trilogy.html"
    },
    {
        title: "Day of the Departed",
        description: "A special episode where the Ninja face off against the spirits of their past enemies.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-day-departed.mp4",
        seasonUrl: "./videoplayer/specials/day-of-the-departed.html"
    },
    {
        title: "Season 7 Shorts",
        description: "Shorts that complement Season 7 and provide additional content and context.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-season-7-shorts.mp4",
        seasonUrl: "./videoplayer/specials/season-7-shorts.html"
    },
    {
        title: "Decoded",
        description: "A recap special that summarizes Seasons 1 through 7 for new viewers.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-decoded.mp4",
        seasonUrl: "./videoplayer/specials/decoded.html"
    },
    {
        title: "The Island",
        description: "The Ninja embark on a mission to save their friend Clutch Powers from a mysterious island.",
        image: "./IMG/images/content/The_Island_Cover.webp",
        trailer: "./img/trailers/special-the-island.mp4",
        seasonUrl: "./videoplayer/specials/the-island.html"
    },
    {
        title: "The Elemental Mechs",
        description: "A special featuring the unique Elemental Mechs of the Ninja and their epic battles.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-elemental-mechs.mp4",
        seasonUrl: "./videoplayer/specials/elemental-mechs.html"
    },
    {
        title: "Tales From The Monastery Of Spinjitzu",
        description: "Short episodes that explore the lore and history of the Monastery of Spinjitzu.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-monastery-spinjitzu.mp4",
        seasonUrl: "./videoplayer/specials/tales-monastery-spinjitzu.html"
    },
    {
        title: "Prime Empire: Return To The Wildness",
        description: "A special episode returning to the Prime Empire world and its wild adventures.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-prime-empire-wildness.mp4",
        seasonUrl: "./videoplayer/specials/prime-empire-return-wildness.html"
    },
    {
        title: "Ninjago: Reimagined",
        description: "A collection of reimagined stories and adventures from the Ninjago universe.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-ninjago-reimagined.mp4",
        seasonUrl: "./videoplayer/specials/ninjago-reimagined.html"
    },
    {
        title: "The Virtues of Spinjitzu",
        description: "Short episodes highlighting the virtues of each Ninja and their personal growth.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-virtues-spinjitzu.mp4",
        seasonUrl: "./videoplayer/specials/virtues-spinjitzu.html"
    },
    {
        title: "Dragons Rising",
        description: "The latest special featuring new adventures with the Ninja and mythical dragons.",
        image: "./IMG/images/content/Special_-_Cover.webp",
        trailer: "./img/trailers/special-dragons-rising.mp4",
        seasonUrl: "./videoplayer/specials/dragons-rising.html"
    }
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

        seriesItem.style.textDecoration = "none";

        const trailerBtn = document.createElement('button');
        trailerBtn.classList.add('trailer-btn');
        trailerBtn.innerText = 'Watch Trailer';
        trailerBtn.addEventListener('click', () => openTrailer(series.trailer));
        seriesItem.appendChild(trailerBtn);

        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Watch Special';
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
