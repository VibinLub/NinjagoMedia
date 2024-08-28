const episodesData = [
    {
        title: "Winds of Change",
        description: "The ninja face a new threat as Lloyd becomes possessed by a vengeful ghost, Morro, who seeks the powerful Realm Crystal.",
        image: "/NinjagoMedia/IMG/images/serie/season5/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep1/player1_url.html"
    },
    {
        title: "Ghost Story",
        description: "As Morro's ghost army begins to take over Ninjago, the ninja must find a way to save Lloyd and stop Morro's quest for the Realm Crystal.",
        image: "/NinjagoMedia/IMG/images/serie/season5/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep2/player1_url.html"
    },
    {
        title: "Stiix and Stones",
        description: "The ninja travel to the city of Stiix to find clues about how to defeat Morro. Meanwhile, Morro's forces grow stronger.",
        image: "/NinjagoMedia/IMG/images/serie/season5/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep3/player1_url.html"
    },
    {
        title: "The Temple on Haunted Hill",
        description: "The ninja search for the Sword of Sanctuary, a weapon that can predict their enemies' moves, while Morro intensifies his attacks.",
        image: "/NinjagoMedia/IMG/images/serie/season5/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep4/player1_url.html"
    },
    {
        title: "Peek-a-Boo",
        description: "The ninja must venture into the Caves of Despair to retrieve the Sword of Sanctuary, but Morro and his ghost warriors are close behind.",
        image: "/NinjagoMedia/IMG/images/serie/season5/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep5/player1_url.html"
    },
    {
        title: "Kingdom Come",
        description: "Morro captures the Realm Crystal, and the ninja must stop him before he opens a portal to the Cursed Realm and unleashes its horrors.",
        image: "/NinjagoMedia/IMG/images/serie/season5/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep6/player1_url.html"
    },
    {
        title: "The Crooked Path",
        description: "Nya begins to embrace her true potential as the Master of Water, while the ninja prepare for their final battle against Morro.",
        image: "/NinjagoMedia/IMG/images/serie/season5/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep7/player1_url.html"
    },
    {
        title: "Grave Danger",
        description: "The ninja face off against Morro in the tomb of the First Spinjitzu Master, where the fate of all realms hangs in the balance.",
        image: "/NinjagoMedia/IMG/images/serie/season5/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep8/player1_url.html"
    },
    {
        title: "Curseworld, Part I",
        description: "Morro opens the portal to the Cursed Realm, and the ninja must battle an army of ghosts to stop him before it's too late.",
        image: "/NinjagoMedia/IMG/images/serie/season5/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season5/ep9/player1_url.html"
    },
    {
        title: "Curseworld, Part II",
        description: "In the epic conclusion, the ninja make a final stand against Morro and the Preeminent, the embodiment of the Cursed Realm.",
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
