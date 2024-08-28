const episodesData = [
    {
        title: "The Hands of Time",
        description: "The ninja discover the return of Acronix, one of the Time Twins, who can manipulate time. They realize that their old enemies, the Elemental Masters of Time, are more dangerous than ever.",
        image: "/NinjagoMedia/IMG/images/serie/season7/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep1/player1_url.html"
    },
    {
        title: "The Hatching",
        description: "Acronix and Krux plan to awaken an army of snakes, the Vermillion. The ninja come face-to-face with their new enemies.",
        image: "/NinjagoMedia/IMG/images/serie/season7/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep2/player1_url.html"
    },
    {
        title: "A Time of Traitors",
        description: "The ninja discover the Time Twins' plan to use Master Wu's powers. They must also uncover a traitor within their own ranks.",
        image: "/NinjagoMedia/IMG/images/serie/season7/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep3/player1_url.html"
    },
    {
        title: "Scavengers",
        description: "Lloyd and his team investigate Krux's role in the rise of the Vermillion. Meanwhile, Kai and Nya confront the truth about their parents.",
        image: "/NinjagoMedia/IMG/images/serie/season7/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep4/player1_url.html"
    },
    {
        title: "A Line in the Sand",
        description: "The ninja try to prevent the Time Twins from opening time portals. Kai and Nya must decide if they can trust their family history to save the day.",
        image: "/NinjagoMedia/IMG/images/serie/season7/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep5/player1_url.html"
    },
    {
        title: "The Attack",
        description: "The Vermillion launch a massive assault on Ninjago City. The ninja must defend the city while the Time Twins try to seize control.",
        image: "/NinjagoMedia/IMG/images/serie/season7/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep6/player1_url.html"
    },
    {
        title: "Secrets Discovered",
        description: "Kai and Nya learn the truth about their parents and their connection to the Time Masters. The Time Twins' plan to rewrite Ninjago's history is revealed.",
        image: "/NinjagoMedia/IMG/images/serie/season7/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep7/player1_url.html"
    },
    {
        title: "Pause and Effect",
        description: "The ninja search for a way to stop the Time Twins before they can manipulate time, traveling through different timelines and overcoming their fears.",
        image: "/NinjagoMedia/IMG/images/serie/season7/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep8/player1_url.html"
    },
    {
        title: "Out of the Fire and Into the Boiling Sea",
        description: "The Time Twins open the time portals and begin to rewrite Ninjago's history. The ninja must prevent this catastrophe with unexpected help.",
        image: "/NinjagoMedia/IMG/images/serie/season7/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep9/player1_url.html"
    },
    {
        title: "Lost in Time",
        description: "In the final battle, the ninja must stop the Time Twins and restore time itself. The future of Ninjago hangs in the balance.",
        image: "/NinjagoMedia/IMG/images/serie/season7/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season7/ep10/player1_url.html"
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
