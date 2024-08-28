const episodesData = [
    {
        title: "The Darkness Comes",
        description: "The Oni have arrived in Ninjago, bringing a dangerous darkness that begins to spread across the land. The ninja must unite to face this new threat.",
        image: "/NinjagoMedia/IMG/images/serie/season10/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season10/ep1/player1_url.html"
    },
    {
        title: "Into the Breach",
        description: "As the darkness spreads, the ninja make a last-ditch effort to stop the Oni by heading into the heart of the darkness.",
        image: "/NinjagoMedia/IMG/images/serie/season10/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season10/ep2/player1_url.html"
    },
    {
        title: "The Fall",
        description: "The ninja face overwhelming odds as the Oni advance. Sacrifices are made as they fight to protect Ninjago from being consumed by darkness.",
        image: "/NinjagoMedia/IMG/images/serie/season10/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season10/ep3/player1_url.html"
    },
    {
        title: "Endings",
        description: "In the final battle against the Oni, the ninja must rely on their unity and the power of friendship to save Ninjago from the encroaching darkness.",
        image: "/NinjagoMedia/IMG/images/serie/season10/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season10/ep4/player1_url.html"
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
