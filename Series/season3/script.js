const episodesDataSeason3 = [
    {
        title: "The Surge",
        description: "The ninja are called back into action when the Overlord returns as a digital entity.",
        image: "/NinjagoMedia/IMG/images/serie/season3/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep1/player1_url.html"
    },
    {
        title: "The Art of the Silent Fist",
        description: "The ninja must learn a new form of fighting after their elemental powers are stolen.",
        image: "/NinjagoMedia/IMG/images/serie/season3/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep2/player1_url.html"
    },
    {
        title: "Blackout",
        description: "The ninja fight to stop the Overlord from taking over Ninjago's electronic systems.",
        image: "/NinjagoMedia/IMG/images/serie/season3/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep3/player1_url.html"
    },
    {
        title: "The Curse of the Golden Master",
        description: "The ninja search for a way to stop the Golden Master from being resurrected.",
        image: "/NinjagoMedia/IMG/images/serie/season3/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep4/player1_url.html"
    },
    {
        title: "Enter the Digiverse",
        description: "The ninja enter the Digiverse to combat the Digital Overlord.",
        image: "/NinjagoMedia/IMG/images/serie/season3/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep5/player1_url.html"
    },
    {
        title: "Codename: Arcturus",
        description: "The ninja head into space to thwart the Overlord's plan to capture the Golden Weapons.",
        image: "/NinjagoMedia/IMG/images/serie/season3/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep6/player1_url.html"
    },
    {
        title: "The Void",
        description: "The ninja face new challenges in space as they try to stop the Overlord's plan.",
        image: "/NinjagoMedia/IMG/images/serie/season3/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season3/ep7/player1_url.html"
    },
    {
        title: "The Titanium Ninja",
        description: "Zane sacrifices himself to stop the Overlord and save Ninjago.",
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
