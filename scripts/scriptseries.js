// Sample series data (replace with actual series data)
const seriesData = [
    {
        title: "Season 1",
        description: "Ninjago: Rise Of The Snakes",
        image: "./IMG/images/content/Season_1_Cover.webp",
        trailer: "./IMG/trailers/trailer1.mp4",
        seasonUrl: "./Series/season1/index.html"
    },
    {
        title: "Season 2",
        description: "Ninjago: Legacy Of The Green Ninja",
        image: "./IMG/images/content/Season_2_Cover.webp",
        trailer: "./IMG/trailers/trailer2.mp4",
        seasonUrl: "./Series/season2/index.html"
    },
    {
        title: "Season 3",
        description: "Ninjago: Rebooted",
        image: "./IMG/images/content/Season_3_Cover.webp",
        trailer: "./IMG/trailers/trailer3.mp4",
        seasonUrl: "./Series/season3/index.html"
    },
    {
        title: "Season 4",
        description: "Ninjago: Tournament Of Elements",
        image: "./IMG/images/content/Season_4_Cover.webp",
        trailer: "./IMG/trailers/trailer4.mp4",
        seasonUrl: "./Series/season4/index.html"
    },
    {
        title: "Season 5",
        description: "Ninjago: Possession",
        image: "./IMG/images/content/Season_5_Cover.webp",
        trailer: "./IMG/trailers/trailer5.mp4",
        seasonUrl: "./Series/season5/index.html"
    },
    {
        title: "Season 6",
        description: "Ninjago: Skybound",
        image: "./IMG/images/content/Season_6_Cover.webp",
        trailer: "./IMG/trailers/trailer6.mp4",
        seasonUrl: "./Series/season6/index.html"
    },
    {
        title: "Season 7",
        description: "Ninjago: The Hands Of Time",
        image: "./IMG/images/content/Season_7_Cover.webp",
        trailer: "./IMG/trailers/trailer7.mp4",
        seasonUrl: "./Series/season7/index.html"
    },
    {
        title: "Season 8",
        description: "Ninjago: Sons Of Garmadon",
        image: "./IMG/images/content/Season_8_Cover.webp",
        trailer: "./IMG/trailers/trailer8.mp4",
        seasonUrl: "./Series/season8/index.html"
    },
    {
        title: "Season 9",
        description: "Ninjago: Hunted",
        image: "./IMG/images/content/Season_9_Cover.webp",
        trailer: "./IMG/trailers/trailer9.mp4",
        seasonUrl: "./Series/season9/index.html"
    },
    {
        title: "Season 10",
        description: "Ninjago: March Of The Oni",
        image: "./IMG/images/content/Season_10_Cover.webp",
        trailer: "./IMG/trailers/trailer10.mp4",
        seasonUrl: "./Series/season10/index.html"
    },
    {
        title: "Season 11",
        description: "Ninjago: Secrets Of The Forbidden Spinjitzu",
        image: "./IMG/images/content/Season_11_Cover.webp",
        trailer: "./IMG/trailers/trailer11.mp4",
        seasonUrl: "./Series/season11/index.html"
    },
    {
        title: "Season 12",
        description: "Ninjago: Prime Empire",
        image: "./IMG/images/content/Season_12_Cover.webp",
        trailer: "./IMG/trailers/trailer12.mp4",
        seasonUrl: "./Series/season12/index.html"
    },
    {
        title: "Season 13",
        description: "Ninjago: Master Of The Mountain",
        image: "./IMG/images/content/Season_13_Cover.webp",
        trailer: "./IMG/trailers/trailer13.mp4",
        seasonUrl: "./Series/season13/index.html"
    },
    {
        title: "Season 14",
        description: "Ninjago: Seabound",
        image: "./IMG/images/content/Season_14_Cover.webp",
        trailer: "./IMG/trailers/trailer14.mp4",
        seasonUrl: "./Series/season14/index.html"
    },
    {
        title: "Season 15",
        description: "Ninjago: Crystalized",
        image: "./IMG/images/content/Season_15_Cover.webp",
        trailer: "./IMG/trailers/trailer15.mp4",
        seasonUrl: "./Series/season15/index.html"
    },
    {
        title: "Dragons Rising Season 1",
        description: "Ninjago: Dragons Rising",
        image: "./IMG/images/content/Season_1_DR_Cover.webp",
        trailer: "./IMG/trailers/trailerDR1.mp4",
        seasonUrl: "./Series/seasonDR1/index.html"
    },
    {
        title: "Dragons Rising Season 2",
        description: "Ninjago: Dragons Rising",
        image: "./IMG/images/content/Season_2_DR_Cover.webp",
        trailer: "./IMG/trailers/trailerDR2.mp4",
        seasonUrl: "./Series/seasonDR2/index.html"
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
