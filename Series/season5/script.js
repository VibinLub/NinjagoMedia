const episodesData = [
    {
        title: "Winds of Change",
        description: "The ninja are scattered after Zane's sacrifice and must reunite to face a new threat.",
        image: "/NinjagoMedia/IMG/images/serie/season5/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep1/player1_url.html"
    },
    {
        title: "Ghost Story",
        description: "The ninja discover that ghosts have invaded Ninjago and must find a way to combat them.",
        image: "/NinjagoMedia/IMG/images/serie/season5/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep2/player1_url.html"
    },
    {
        title: "Stiix and Stones",
        description: "The ninja travel to the city of Stiix to find clues about the ghost invasion.",
        image: "/NinjagoMedia/IMG/images/serie/season5/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep3/player1_url.html"
    },
    {
        title: "The Temple on Haunted Hill",
        description: "The ninja visit the Temple of Airjitzu to uncover secrets that could help them defeat the ghosts.",
        image: "/NinjagoMedia/IMG/images/serie/season5/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep4/player1_url.html"
    },
    {
        title: "Peek-a-Boo",
        description: "The ninja must rescue Lloyd from the ghosts while discovering a new ally.",
        image: "/NinjagoMedia/IMG/images/serie/season5/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep5/player1_url.html"
    },
    {
        title: "Kingdom Come",
        description: "The ninja travel to the Cloud Kingdom to gain the help of the writers of destiny.",
        image: "/NinjagoMedia/IMG/images/serie/season5/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep6/player1_url.html"
    },
    {
        title: "The Crooked Path",
        description: "The ninja face a difficult journey to obtain the Sword of Sanctuary.",
        image: "/NinjagoMedia/IMG/images/serie/season5/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep7/player1_url.html"
    },
    {
        title: "Grave Danger",
        description: "The ninja must protect the Sword of Sanctuary from falling into the hands of Morro.",
        image: "/NinjagoMedia/IMG/images/serie/season5/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep8/player1_url.html"
    },
    {
        title: "Curse World, Part I",
        description: "The ninja face Morro and his ghost army in a final battle to save Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season5/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep9/player1_url.html"
    },
    {
        title: "Curse World, Part II",
        description: "The ninja must stop the Preeminent from destroying Ninjago and save Lloyd from possession.",
        image: "/NinjagoMedia/IMG/images/serie/season5/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep10/player1_url.html"
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
