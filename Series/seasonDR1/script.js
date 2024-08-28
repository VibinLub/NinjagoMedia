const episodesDataSeason1 = [
    {
        title: "Rise of the Dragons",
        description: "A new threat emerges as dragons rise and challenge the peace of Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep1/player1_url.html"
    },
    {
        title: "The Dragon’s Call",
        description: "The ninja receive a mysterious call for help from a powerful dragon.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep2/player1_url.html"
    },
    {
        title: "The Dragon’s Lair",
        description: "The ninja venture into a dragon’s lair to uncover ancient secrets.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep3/player1_url.html"
    },
    {
        title: "The Fiery Trials",
        description: "A series of fiery trials await the ninja as they seek to gain the dragons' trust.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep4/player1_url.html"
    },
    {
        title: "Dragon Riders",
        description: "The ninja become dragon riders and face challenges in the sky.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep5/player1_url.html"
    },
    {
        title: "The Dragon’s Heart",
        description: "The ninja discover the heart of the dragon, a source of immense power.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep6/player1_url.html"
    },
    {
        title: "The Hidden Fortress",
        description: "The ninja uncover a hidden fortress where dragons are guarded.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep7/player1_url.html"
    },
    {
        title: "The Dragon’s Wrath",
        description: "An ancient dragon awakens and threatens to unleash its wrath upon Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep8/player1_url.html"
    },
    {
        title: "The Crystal Cavern",
        description: "A cavern filled with dragon crystals is explored by the ninja.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep9/player1_url.html"
    },
    {
        title: "The Dragon’s Return",
        description: "The dragons return to Ninjago to aid the ninja in their quest.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep10/player1_url.html"
    },
    {
        title: "The Dragon’s Legacy",
        description: "The legacy of the dragons is revealed as the ninja confront their past.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep11/player1_url.html"
    },
    {
        title: "The Forbidden Realm",
        description: "The ninja enter a forbidden realm to uncover ancient dragon knowledge.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep12/player1_url.html"
    },
    {
        title: "The Dragon’s Breath",
        description: "A dragon’s breath holds a mysterious power that the ninja must harness.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep13/player1_url.html"
    },
    {
        title: "The Ancient Ritual",
        description: "An ancient dragon ritual reveals new challenges for the ninja.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/14.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep14/player1_url.html"
    },
    {
        title: "The Dark Dragon",
        description: "A dark dragon emerges, threatening to disrupt the balance of power.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/15.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep15/player1_url.html"
    },
    {
        title: "The Dragon’s Pact",
        description: "The ninja form a pact with the dragons to fight against a common enemy.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/16.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep16/player1_url.html"
    },
    {
        title: "The Sky Fortress",
        description: "The ninja and dragons battle against a fortress in the sky.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/17.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep17/player1_url.html"
    },
    {
        title: "The Dragon’s Return",
        description: "The dragons return to Ninjago to aid the ninja in their quest.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/18.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep18/player1_url.html"
    },
    {
        title: "The Eternal Flame",
        description: "The ninja must find and control the eternal flame to prevent disaster.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/19.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep19/player1_url.html"
    },
    {
        title: "The Final Battle",
        description: "The ultimate battle against the dragons' enemies to secure peace for Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season1DR/20.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/DR/season1/ep20/player1_url.html"
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
