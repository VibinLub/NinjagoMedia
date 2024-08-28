const episodesData = [
    {
        title: "The Surge",
        description: "Peace has returned to Ninjago, but when the Overlord is resurrected as a digital entity, the ninja must reunite to stop this new cyber threat.",
        image: "/NinjagoMedia/IMG/images/serie/season3/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep1/player1_url.html"
    },
    {
        title: "The Art of the Silent Fist",
        description: "Zane discovers a hidden power as the ninja face the Nindroids, an army of robotic enemies created by the Overlord.",
        image: "/NinjagoMedia/IMG/images/serie/season3/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep2/player1_url.html"
    },
    {
        title: "Blackout",
        description: "The Overlord's digital takeover intensifies, and the ninja must find a way to shut down the power grid to stop the Nindroids.",
        image: "/NinjagoMedia/IMG/images/serie/season3/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep3/player1_url.html"
    },
    {
        title: "The Curse of the Golden Master",
        description: "The ninja learn of the Golden Master's power and realize they must prevent the Overlord from accessing it, or Ninjago will be doomed.",
        image: "/NinjagoMedia/IMG/images/serie/season3/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep4/player1_url.html"
    },
    {
        title: "Enter the Digiverse",
        description: "The ninja enter the Digiverse to confront the Overlord on his own turf, risking everything to defeat him in the digital realm.",
        image: "/NinjagoMedia/IMG/images/serie/season3/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep5/player1_url.html"
    },
    {
        title: "Codename: Arcturus",
        description: "The ninja embark on a mission to stop the Overlord's plan to launch the Golden Weapons into space, which would make him unstoppable.",
        image: "/NinjagoMedia/IMG/images/serie/season3/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep6/player1_url.html"
    },
    {
        title: "The Void",
        description: "The ninja chase the Nindroids into space, where they must stop the Overlord's plan before it is too late.",
        image: "/NinjagoMedia/IMG/images/serie/season3/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep7/player1_url.html"
    },
    {
        title: "The Titanium Ninja",
        description: "In the thrilling season finale, Zane makes the ultimate sacrifice to defeat the Overlord and save Ninjago from destruction.",
        image: "/NinjagoMedia/IMG/images/serie/season3/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep8/player1_url.html"
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
