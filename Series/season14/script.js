const episodesData = [
    {
        title: "The Storm of the Sea",
        description: "The ninja face a powerful storm at sea as they embark on their latest adventure.",
        image: "/NinjagoMedia/IMG/images/serie/season14/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep1/player1_url.html"
    },
    {
        title: "The Rising Tide",
        description: "The rising tide brings new challenges and dangers as the ninja navigate treacherous waters.",
        image: "/NinjagoMedia/IMG/images/serie/season14/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep2/player1_url.html"
    },
    {
        title: "The Sea’s Secrets",
        description: "The ninja uncover secrets hidden beneath the sea as they delve deeper into their adventure.",
        image: "/NinjagoMedia/IMG/images/serie/season14/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep3/player1_url.html"
    },
    {
        title: "The Ocean’s Fury",
        description: "The fury of the ocean threatens to overwhelm the ninja as they face powerful sea creatures.",
        image: "/NinjagoMedia/IMG/images/serie/season14/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep4/player1_url.html"
    },
    {
        title: "The Coral Kingdom",
        description: "The ninja explore the Coral Kingdom, a mysterious underwater realm with its own dangers and secrets.",
        image: "/NinjagoMedia/IMG/images/serie/season14/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep5/player1_url.html"
    },
    {
        title: "The Sea Serpent",
        description: "A sea serpent threatens the ninja’s quest, leading to a thrilling battle under the waves.",
        image: "/NinjagoMedia/IMG/images/serie/season14/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep6/player1_url.html"
    },
    {
        title: "The Depths of the Abyss",
        description: "The ninja dive into the depths of the abyss to confront ancient evils lurking beneath the surface.",
        image: "/NinjagoMedia/IMG/images/serie/season14/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep7/player1_url.html"
    },
    {
        title: "The Trident’s Power",
        description: "The ninja seek to harness the power of an ancient trident to aid them in their fight against sea threats.",
        image: "/NinjagoMedia/IMG/images/serie/season14/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep8/player1_url.html"
    },
    {
        title: "The Hidden Fortress",
        description: "The ninja find a hidden fortress under the sea that holds crucial information and powerful artifacts.",
        image: "/NinjagoMedia/IMG/images/serie/season14/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep9/player1_url.html"
    },
    {
        title: "The Sea Witch",
        description: "A powerful sea witch poses a new threat to the ninja as they continue their quest beneath the waves.",
        image: "/NinjagoMedia/IMG/images/serie/season14/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep10/player1_url.html"
    },
    {
        title: "The Ancient Guardian",
        description: "The ninja encounter an ancient guardian of the sea who tests their resolve and abilities.",
        image: "/NinjagoMedia/IMG/images/serie/season14/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep11/player1_url.html"
    },
    {
        title: "The Battle for the Ocean",
        description: "An epic battle for control of the ocean unfolds as the ninja confront their greatest adversaries.",
        image: "/NinjagoMedia/IMG/images/serie/season14/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep12/player1_url.html"
    },
    {
        title: "The Coral’s Curse",
        description: "The ninja face a curse placed upon the Coral Kingdom, and must find a way to break it.",
        image: "/NinjagoMedia/IMG/images/serie/season14/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep13/player1_url.html"
    },
    {
        title: "The Seabound Saga",
        description: "The saga of the Seabound unfolds as the ninja navigate through a series of trials and confrontations.",
        image: "/NinjagoMedia/IMG/images/serie/season14/14.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep14/player1_url.html"
    },
    {
        title: "The Lost City of the Deep",
        description: "The ninja discover the Lost City of the Deep, a place of great power and mystery.",
        image: "/NinjagoMedia/IMG/images/serie/season14/15.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep15/player1_url.html"
    },
    {
        title: "The Final Confrontation",
        description: "The final confrontation with the sea’s greatest threats reaches its climax as the ninja fight for their world.",
        image: "/NinjagoMedia/IMG/images/serie/season14/16.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season14/ep16/player1_url.html"
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
