const episodesData = [
    {
        title: "Rise of the Snakes",
        description: "The ninja team must reunite to face a new threat as the ancient Serpentine tribes awaken and begin their plans to conquer Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season1/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep1/player1_url.html"
    },
    {
        title: "Home",
        description: "The ninja must protect Lloyd from the Serpentine, who want to use him to fulfill their ancient prophecy and gain power.",
        image: "/NinjagoMedia/IMG/images/serie/season1/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep2/player1_url.html"
    },
    {
        title: "Snakebit",
        description: "Jay faces off against the Hypnobrai, one of the Serpentine tribes, while the rest of the team tries to find a way to stop them.",
        image: "/NinjagoMedia/IMG/images/serie/season1/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep3/player1_url.html"
    },
    {
        title: "Never Trust a Snake",
        description: "The ninja try to infiltrate the Serpentine ranks by pretending to be allies, but their deception leads to unexpected complications.",
        image: "/NinjagoMedia/IMG/images/serie/season1/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep4/player1_url.html"
    },
    {
        title: "Can of Worms",
        description: "Lloyd accidentally releases the Fangpyre tribe, another Serpentine group, causing chaos as the ninja scramble to contain them.",
        image: "/NinjagoMedia/IMG/images/serie/season1/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep5/player1_url.html"
    },
    {
        title: "The Snake King",
        description: "Pythor, the last of the Anacondrai tribe, emerges and begins uniting the Serpentine tribes to execute their plan for domination.",
        image: "/NinjagoMedia/IMG/images/serie/season1/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep6/player1_url.html"
    },
    {
        title: "Tick Tock",
        description: "Zane learns more about his origins while the ninja work to stop the Serpentine from obtaining the powerful Fangblades.",
        image: "/NinjagoMedia/IMG/images/serie/season1/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep7/player1_url.html"
    },
    {
        title: "Once Bitten, Twice Shy",
        description: "Jay faces a personal crisis as he begins to turn into a snake after being bitten by the Fangpyre, adding urgency to their mission.",
        image: "/NinjagoMedia/IMG/images/serie/season1/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep8/player1_url.html"
    },
    {
        title: "The Royal Blacksmiths",
        description: "The ninja seek the aid of the royal blacksmiths to forge weapons capable of defeating the Serpentine and their Fangblades.",
        image: "/NinjagoMedia/IMG/images/serie/season1/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep9/player1_url.html"
    },
    {
        title: "Rise of the Great Devourer",
        description: "In the epic finale, the ninja must confront the Serpentine and the Great Devourer, a colossal serpent threatening to destroy Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season1/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep10/player1_url.html"
    }
];


// Function to dynamically populate the episode list
function populateEpisodes() {
    const episodesList = document.querySelector('.episode-list');
    episodesList.innerHTML = '';

    episodesData.forEach(episode => {
        const episodeItem = document.createElement('div');
        episodeItem.classList.add('episode');

        episodeItem.innerHTML = `
            <img src="${episode.image}" alt="${episode.title}">
            <h2>${episode.title}</h2>
            <p>${episode.description}</p>
        `;

        const watchBtn = document.createElement('button');
        watchBtn.classList.add('watch-btn');
        watchBtn.innerText = 'Watch Episode';
        watchBtn.addEventListener('click', () => window.location.href = episode.episodeUrl);
        episodeItem.appendChild(watchBtn);

        episodesList.appendChild(episodeItem);
    });
}

// Populate episodes on page load
document.addEventListener('DOMContentLoaded', () => {
    populateEpisodes();
});
