const episodesData = [
    {
        title: "The Invitation",
        description: "The ninja are invited to Master Chen's Tournament of Elements, where they must compete against other elemental masters to save their friend Zane.",
        image: "/NinjagoMedia/IMG/images/serie/season4/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep1/player1_url.html"
    },
    {
        title: "Only One Can Remain",
        description: "The tournament intensifies as the ninja face powerful opponents, and secrets about Chen's true plan begin to emerge.",
        image: "/NinjagoMedia/IMG/images/serie/season4/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep2/player1_url.html"
    },
    {
        title: "Versus",
        description: "As the ninja progress in the tournament, they begin to form alliances with other elemental masters to uncover Chen's plot.",
        image: "/NinjagoMedia/IMG/images/serie/season4/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep3/player1_url.html"
    },
    {
        title: "Ninja Roll",
        description: "The ninja continue to compete in the tournament while trying to find a way to rescue Zane, who is being held captive by Chen.",
        image: "/NinjagoMedia/IMG/images/serie/season4/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep4/player1_url.html"
    },
    {
        title: "Spy for a Spy",
        description: "The ninja discover a spy in their midst and must work quickly to prevent Chen from gaining the upper hand in the tournament.",
        image: "/NinjagoMedia/IMG/images/serie/season4/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep5/player1_url.html"
    },
    {
        title: "Spellbound",
        description: "As Chen's plan comes to light, the ninja must band together with their new allies to stop him from unleashing a powerful curse.",
        image: "/NinjagoMedia/IMG/images/serie/season4/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep6/player1_url.html"
    },
    {
        title: "The Forgotten Element",
        description: "Chen's plot reaches a critical point as he seeks to steal the powers of the elemental masters. The ninja race to stop him before it's too late.",
        image: "/NinjagoMedia/IMG/images/serie/season4/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep7/player1_url.html"
    },
    {
        title: "The Day of the Dragon",
        description: "The ninja and their allies face off against Chen's forces in an epic battle to prevent the curse from being unleashed.",
        image: "/NinjagoMedia/IMG/images/serie/season4/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep8/player1_url.html"
    },
    {
        title: "The Greatest Fear of All",
        description: "Chen's curse begins to take effect, and the ninja must confront their greatest fears to save Ninjago from destruction.",
        image: "/NinjagoMedia/IMG/images/serie/season4/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season4/ep9/player1_url.html"
    },
    {
        title: "The Corridor of Elders",
        description: "In the season finale, the ninja join forces with former enemies to stop Chen's army and protect Ninjago from being conquered.",
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
