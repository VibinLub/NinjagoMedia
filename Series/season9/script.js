const episodesData = [
    {
        title: "Firstbourne",
        description: "In the Realm of Oni and Dragons, the ninja are split up as they try to survive in this hostile world while seeking the powerful Firstbourne dragon.",
        image: "/NinjagoMedia/IMG/images/serie/season9/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep1/player1_url.html"
    },
    {
        title: "Iron & Stone",
        description: "Cole, Wu, and the other ninja are captured by the Dragon Hunters, while Lloyd leads the resistance against Lord Garmadon in Ninjago City.",
        image: "/NinjagoMedia/IMG/images/serie/season9/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep2/player1_url.html"
    },
    {
        title: "Radio Free Ninjago",
        description: "Lloyd and his friends broadcast a message of hope to the people of Ninjago City while the ninja in the Realm of Oni and Dragons plot their escape.",
        image: "/NinjagoMedia/IMG/images/serie/season9/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep3/player1_url.html"
    },
    {
        title: "How to Build a Dragon",
        description: "The ninja in the Oni and Dragon Realm attempt to build their own dragon to escape the Dragon Hunters, while Lloyd faces challenges as a leader.",
        image: "/NinjagoMedia/IMG/images/serie/season9/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep4/player1_url.html"
    },
    {
        title: "The Gilded Path",
        description: "The resistance in Ninjago City fights back against Garmadon's forces, while the ninja in the Oni and Dragon Realm make a daring escape attempt.",
        image: "/NinjagoMedia/IMG/images/serie/season9/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep5/player1_url.html"
    },
    {
        title: "Two Lies, One Truth",
        description: "The ninja must figure out who to trust in the Oni and Dragon Realm, while Lloyd struggles with his role in the resistance against his father.",
        image: "/NinjagoMedia/IMG/images/serie/season9/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep6/player1_url.html"
    },
    {
        title: "The Weakest Link",
        description: "Tensions rise as the ninja face betrayal in the Oni and Dragon Realm, and Lloyd's resistance movement is dealt a heavy blow.",
        image: "/NinjagoMedia/IMG/images/serie/season9/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep7/player1_url.html"
    },
    {
        title: "Saving Faith",
        description: "Faith makes a risky decision to help the ninja in the Oni and Dragon Realm, while Lloyd gathers his strength to fight back in Ninjago City.",
        image: "/NinjagoMedia/IMG/images/serie/season9/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep8/player1_url.html"
    },
    {
        title: "Lessons for a Master",
        description: "The ninja learn valuable lessons about leadership and sacrifice, while the resistance prepares for a final stand against Lord Garmadon.",
        image: "/NinjagoMedia/IMG/images/serie/season9/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep9/player1_url.html"
    },
    {
        title: "Green Destiny",
        description: "In the epic season finale, Lloyd faces his father in a final showdown, while the ninja in the Oni and Dragon Realm fight to return home.",
        image: "/NinjagoMedia/IMG/images/serie/season9/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season9/ep10/player1_url.html"
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
