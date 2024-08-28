const episodesData = [
    {
        title: "Darkness Shall Rise",
        description: "The ninja discover that Garmadon's mega-weapon is capable of creating new evils, forcing them to protect Ninjago from its dark power.",
        image: "/NinjagoMedia/IMG/images/serie/season2/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep1/player1_url.html"
    },
    {
        title: "Pirates vs. Ninja",
        description: "The ninja face off against Captain Soto and his pirates, who have been resurrected by Garmadon's mega-weapon.",
        image: "/NinjagoMedia/IMG/images/serie/season2/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep2/player1_url.html"
    },
    {
        title: "Double Trouble",
        description: "Lloyd faces his greatest challenge yet when the mega-weapon creates an evil doppelgänger of him, leading to a battle of the Green Ninja vs. himself.",
        image: "/NinjagoMedia/IMG/images/serie/season2/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep3/player1_url.html"
    },
    {
        title: "Ninjaball Run",
        description: "The ninja enter the Ninjaball Run, a high-stakes race across Ninjago, to recover the mega-weapon before it falls into the wrong hands.",
        image: "/NinjagoMedia/IMG/images/serie/season2/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep4/player1_url.html"
    },
    {
        title: "Child's Play",
        description: "The ninja are transformed into children by the mega-weapon, and must find a way to return to normal while still protecting Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep5/player1_url.html"
    },
    {
        title: "Wrong Place, Wrong Time",
        description: "Garmadon uses the mega-weapon to travel back in time and prevent the formation of the ninja team, forcing the present-day ninja to stop him.",
        image: "/NinjagoMedia/IMG/images/serie/season2/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep6/player1_url.html"
    },
    {
        title: "The Stone Army",
        description: "The ninja journey to the Dark Island to stop the awakening of the Stone Army, an indestructible force that threatens all of Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep7/player1_url.html"
    },
    {
        title: "The Day Ninjago Stood Still",
        description: "As the Stone Army rises, the ninja must prevent the ultimate weapon, the Garmatron, from being unleashed upon Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep8/player1_url.html"
    },
    {
        title: "The Last Voyage",
        description: "The ninja team up with the Ultra Dragon to stop Garmadon from bringing the Dark Island to Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season2/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep9/player1_url.html"
    },
    {
        title: "Island of Darkness",
        description: "The ninja must confront Garmadon and the Stone Army on the Dark Island to prevent them from completing the Garmatron.",
        image: "/NinjagoMedia/IMG/images/serie/season2/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep10/player1_url.html"
    },
    {
        title: "The Last Hope",
        description: "The ninja set out to find the Temple of Light, where they hope to unlock the ultimate power to defeat the Stone Army.",
        image: "/NinjagoMedia/IMG/images/serie/season2/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep11/player1_url.html"
    },
    {
        title: "Return of the Overlord",
        description: "The Overlord reveals his true plan to use the Garmatron to plunge Ninjago into darkness. The ninja must stop him at all costs.",
        image: "/NinjagoMedia/IMG/images/serie/season2/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season2/ep12/player1_url.html"
    },
    {
        title: "Rise of the Spinjitzu Master",
        description: "In the season finale, Lloyd faces the Overlord in a final battle to save Ninjago and fulfill his destiny as the Ultimate Spinjitzu Master.",
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
