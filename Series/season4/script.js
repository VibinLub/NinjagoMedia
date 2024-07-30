const episodesDataSeason4 = [
    {
        title: "The Invitation",
        description: "The ninja receive an invitation to Master Chen's Tournament of Elements.",
        image: "/NinjagoMedia/IMG/images/serie/season4/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep1/player1_url.html"
    },
    {
        title: "Only One Can Remain",
        description: "The ninja compete in the tournament while uncovering Chen's plans.",
        image: "/NinjagoMedia/IMG/images/serie/season4/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep2/player1_url.html"
    },
    {
        title: "Versus",
        description: "The ninja face off against elemental masters in the tournament.",
        image: "/NinjagoMedia/IMG/images/serie/season4/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep3/player1_url.html"
    },
    {
        title: "Ninja Roll",
        description: "The ninja must work together to pass the tournament's obstacles.",
        image: "/NinjagoMedia/IMG/images/serie/season4/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep4/player1_url.html"
    },
    {
        title: "Spy for a Spy",
        description: "The ninja uncover a spy in their midst while continuing to compete in the tournament.",
        image: "/NinjagoMedia/IMG/images/serie/season4/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep5/player1_url.html"
    },
    {
        title: "Spellbound",
        description: "The ninja discover Chen's plan to steal the elemental powers and stop him.",
        image: "/NinjagoMedia/IMG/images/serie/season4/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep6/player1_url.html"
    },
    {
        title: "The Forgotten Element",
        description: "The ninja learn about Chen's past and his plan to harness all elemental powers.",
        image: "/NinjagoMedia/IMG/images/serie/season4/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep7/player1_url.html"
    },
    {
        title: "Day of the Dragon",
        description: "The ninja must thwart Chen's plan to transform his followers into Anacondrai.",
        image: "/NinjagoMedia/IMG/images/serie/season4/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep8/player1_url.html"
    },
    {
        title: "The Greatest Fear of All",
        description: "Chen's spell is completed, and the ninja face a dire situation.",
        image: "/NinjagoMedia/IMG/images/serie/season4/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep9/player1_url.html"
    },
    {
        title: "The Corridor of Elders",
        description: "The ninja and their allies confront Chen's army in a final battle.",
        image: "/NinjagoMedia/IMG/images/serie/season4/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep10/player1_url.html"
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
