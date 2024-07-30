const episodesData = [
    {
        title: "Darkness Shall Rise",
        description: "The ninja must protect Lloyd from his father, Lord Garmadon, who has teamed up with the Serpentine.",
        image: "/NinjagoMedia/IMG/images/serie/season2/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep1/player1_url.html"
    },
    {
        title: "Pirates vs. Ninja",
        description: "The ninja face off against Captain Soto and his pirates, who have escaped their prison.",
        image: "/NinjagoMedia/IMG/images/serie/season2/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep2/player1_url.html"
    },
    {
        title: "Double Trouble",
        description: "Lloyd struggles with his growing powers, while the ninja prepare for an impending threat.",
        image: "/NinjagoMedia/IMG/images/serie/season2/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep3/player1_url.html"
    },
    {
        title: "Ninjaball Run",
        description: "The ninja participate in a race to obtain a critical piece of the final Fangblade.",
        image: "/NinjagoMedia/IMG/images/serie/season2/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep4/player1_url.html"
    },
    {
        title: "Child's Play",
        description: "The ninja are turned into children by a magical artifact, complicating their mission.",
        image: "/NinjagoMedia/IMG/images/serie/season2/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep5/player1_url.html"
    },
    {
        title: "Wrong Place, Wrong Time",
        description: "The ninja travel back in time to prevent Lord Garmadon from altering the past.",
        image: "/NinjagoMedia/IMG/images/serie/season2/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep6/player1_url.html"
    },
    {
        title: "The Stone Army",
        description: "The ninja discover an ancient stone army and prepare for a new battle against an ancient enemy.",
        image: "/NinjagoMedia/IMG/images/serie/season2/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep7/player1_url.html"
    },
    {
        title: "The Day Ninjago Stood Still",
        description: "The ninja must prevent the Overlord from bringing about a catastrophic event in Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep8/player1_url.html"
    },
    {
        title: "The Last Voyage",
        description: "The ninja embark on a final voyage to confront their enemies and protect Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep9/player1_url.html"
    },
    {
        title: "Island of Darkness",
        description: "The ninja journey to the Island of Darkness to face the ultimate battle against the Overlord.",
        image: "/NinjagoMedia/IMG/images/serie/season2/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep10/player1_url.html"
    },
    {
        title: "The Ticking Clock",
        description: "The ninja race against time to stop the Overlord's plans from coming to fruition.",
        image: "/NinjagoMedia/IMG/images/serie/season2/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep11/player1_url.html"
    },
    {
        title: "The Overlord Cometh",
        description: "The Overlord's power grows stronger, and the ninja must unite to stop him once and for all.",
        image: "/NinjagoMedia/IMG/images/serie/season2/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep12/player1_url.html"
    },
    {
        title: "Rise of the Spinjitzu Master",
        description: "Lloyd embraces his destiny in an epic showdown against the Overlord to save Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep13/player1_url.html"
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
