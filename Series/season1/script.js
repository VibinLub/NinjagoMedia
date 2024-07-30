const episodesData = [
    {
        title: "Rise of the Snakes",
        description: "The ninja are training to confront the prophecy of the Green Ninja when they discover Lloyd Garmadon has unleashed the ancient race of snakes.",
        image: "/NinjagoMedia/IMG/images/serie/season1/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep1/player1_url.html"
    },
    {
        title: "Home",
        description: "The ninja must protect Lloyd when he is expelled from Darkley's Boarding School and learns the tough lesson of what it means to be a hero.",
        image: "/NinjagoMedia/IMG/images/serie/season1/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep2/player1_url.html"
    },
    {
        title: "Snakebit",
        description: "Jay's parents are turned into snakes after Jay falls into a trap while trying to retrieve the Sword of Fire.",
        image: "/NinjagoMedia/IMG/images/serie/season1/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep3/player1_url.html"
    },
    {
        title: "Never Trust a Snake",
        description: "Lloyd unearths a second snake tribe, the Fangpyres, to help him reclaim the lost map of the Golden Weapons.",
        image: "/NinjagoMedia/IMG/images/serie/season1/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep4/player1_url.html"
    },
    {
        title: "Can of Worms",
        description: "The Serpentine are united under the leadership of Pythor, who plans to use the four Fang Blades to awaken the Great Devourer.",
        image: "/NinjagoMedia/IMG/images/serie/season1/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep5/player1_url.html"
    },
    {
        title: "The Snake King",
        description: "Pythor steals the remaining scrolls to find the four Fang Blades that will awaken the Great Devourer.",
        image: "/NinjagoMedia/IMG/images/serie/season1/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep6/player1_url.html"
    },
    {
        title: "Tick Tock",
        description: "Zane uncovers his true potential when the ninja search for the third Fang Blade in the Glacier Barrens.",
        image: "/NinjagoMedia/IMG/images/serie/season1/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep7/player1_url.html"
    },
    {
        title: "Once Bitten, Twice Shy",
        description: "Jay and Nya must retrieve the fourth Fang Blade, as Jay discovers the price of being bitten by the Great Devourer's venom.",
        image: "/NinjagoMedia/IMG/images/serie/season1/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep8/player1_url.html"
    },
    {
        title: "The Royal Blacksmiths",
        description: "The ninja participate in the talent show at Cole's father's dance club to retrieve the third Fang Blade.",
        image: "/NinjagoMedia/IMG/images/serie/season1/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep9/player1_url.html"
    },
    {
        title: "The Green Ninja",
        description: "The ninja discover the identity of the Green Ninja, who is destined to defeat Lord Garmadon.",
        image: "/NinjagoMedia/IMG/images/serie/season1/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep10/player1_url.html"
    },
    {
        title: "All of Nothing",
        description: "The ninja face Pythor and the Serpentine in a final battle to prevent the awakening of the Great Devourer.",
        image: "/NinjagoMedia/IMG/images/serie/season1/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep11/player1_url.html"
    },
    {
        title: "The Rise of the Great Devourer",
        description: "The ninja fight to stop the Great Devourer from consuming Ninjago as the ultimate battle begins.",
        image: "/NinjagoMedia/IMG/images/serie/season1/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep12/player1_url.html"
    },
    {
        title: "Day of the Great Devourer",
        description: "The ninja must defeat the Great Devourer to save Ninjago and fulfill the prophecy of the Green Ninja.",
        image: "/NinjagoMedia/IMG/images/serie/season1/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep13/player1_url.html"
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
