const episodesDataSeason2 = [
    {
        title: "The Awakening",
        description: "The dragons awaken and a new era begins for Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep1/player1_url.html"
    },
    {
        title: "The Dragon’s Fury",
        description: "The fury of the dragons is unleashed as new threats emerge.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep2/player1_url.html"
    },
    {
        title: "The Forbidden Lands",
        description: "The ninja journey to forbidden lands to seek out powerful dragons.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep3/player1_url.html"
    },
    {
        title: "The Dragon’s Keeper",
        description: "A mysterious figure known as the Dragon’s Keeper helps the ninja in their quest.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep4/player1_url.html"
    },
    {
        title: "The Sky Battle",
        description: "An epic battle in the skies between the ninja and their enemies unfolds.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep5/player1_url.html"
    },
    {
        title: "The Dragon’s End",
        description: "The ultimate confrontation as the dragons' fate is decided.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep6/player1_url.html"
    },
    {
        title: "The Last Stand",
        description: "The final stand against the dragon’s enemies to protect Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep7/player1_url.html"
    },
    {
        title: "The Dragon’s Legacy",
        description: "The legacy of the dragons is revealed as the ninja confront their past.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep8/player1_url.html"
    },
    {
        title: "The Hidden Citadel",
        description: "A hidden citadel holds the key to defeating the dragons' enemies.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep9/player1_url.html"
    },
    {
        title: "The Ancient Prophecy",
        description: "An ancient prophecy reveals the fate of the dragons and Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep10/player1_url.html"
    },
    {
        title: "The Elemental Dragons",
        description: "Elemental dragons with unique powers are discovered by the ninja.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep11/player1_url.html"
    },
    {
        title: "The Dragon’s Wrath",
        description: "The wrath of the dragons tests the ninja’s resolve and strength.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep12/player1_url.html"
    },
    {
        title: "The Dragon’s Secret",
        description: "A secret about the dragons is revealed, changing the course of the battle.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep13/player1_url.html"
    },
    {
        title: "The Final Conflict",
        description: "The final conflict between the ninja and the dragons' enemies reaches its climax.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/14.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep14/player1_url.html"
    },
    {
        title: "The Dragon’s Gift",
        description: "A mysterious gift from the dragons provides unexpected help.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/15.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep15/player1_url.html"
    },
    {
        title: "The Legacy of the Dragons",
        description: "The final legacy of the dragons is secured, bringing peace to Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/16.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep16/player1_url.html"
    },
    {
        title: "The Dawn of Harmony",
        description: "The dawn of a new era of harmony is celebrated as the dragons and ninja find peace.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/17.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep17/player1_url.html"
    },
    {
        title: "The Dragon’s Resurgence",
        description: "The dragons make a resurgence, ensuring Ninjago's future is secure.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/18.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep18/player1_url.html"
    },
    {
        title: "The Dragon’s Prophecy",
        description: "A final prophecy about the dragons is revealed, shaping the future of Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/19.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep19/player1_url.html"
    },
    {
        title: "The Final Triumph",
        description: "The ultimate triumph of the ninja and dragons over their enemies.",
        image: "/NinjagoMedia/IMG/images/serie/season2DR/20.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season2/ep20/player1_url.html"
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
