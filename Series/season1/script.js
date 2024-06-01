// Sample episode data (replace with actual episode data)
const episodesData = [
    {
        title: "The Beginning of Ninjago",
        description: "The ninja, Kai, Jay, Cole, Zane, and Nya, begin their journey to protect Ninjago from evil.",
        image: "/NinjagoMedia/IMG/images/serie/season1/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep1/player1_url.html"
    },
    {
        title: "The Golden Weapons",
        description: "The ninja embark on a quest to find the four Golden Weapons to prevent Lord Garmadon from destroying the world.",
        image: "/NinjagoMedia/IMG/images/serie/season1/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep2/player1_url.html"
    },
    {
        title: "King of Shadows",
        description: "The ninja confront the dark samurai, Samukai, to obtain the third Golden Weapon.",
        image: "/NinjagoMedia/IMG/images/serie/season1/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep3/player1_url.html"
    },
    {
        title: "Weapon of Honor",
        description: "The ninja embark on a perilous mission to obtain the fourth Golden Weapon, the Nunchucks of Lightning.",
        image: "/NinjagoMedia/IMG/images/serie/season1/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep4/player1_url.html"
    },
    {
        title: "Ancient Sword",
        description: "The ninja travel to the Hidden Monastery to uncover the location of the Ancient Sword.",
        image: "/NinjagoMedia/IMG/images/serie/season1/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep5/player1_url.html"
    },
    {
        title: "The New Masters",
        description: "The ninja train to become masters of Spinjitzu under the guidance of Sensei Wu.",
        image: "/NinjagoMedia/IMG/images/serie/season1/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep6/player1_url.html"
    },
    {
        title: "Stone Soldiers",
        description: "The ninja are confronted with the malevolent forces of the Stone Soldiers coming to life.",
        image: "/NinjagoMedia/IMG/images/serie/season1/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep7/player1_url.html"
    },
    {
        title: "The Eyes of Skulkin",
        description: "The ninja must protect the Eye of Ages from Lord Garmadon and his army of skeletons.",
        image: "/NinjagoMedia/IMG/images/serie/season1/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep8/player1_url.html"
    },
    {
        title: "The Great Champion",
        description: "Jay participates in a tournament to defend the honor of the ninja and win the Traveler's Tea.",
        image: "/NinjagoMedia/IMG/images/serie/season1/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep9/player1_url.html"
    },
    {
        title: "The Green Ninja",
        description: "The identity of the Green Ninja is finally revealed, altering the balance in the fight against Lord Garmadon.",
        image: "/NinjagoMedia/IMG/images/serie/season1/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep10/player1_url.html"
    },
    {
        title: "All of Fighting Techniques",
        description: "The ninja must overcome a series of challenges to prove they are worthy of becoming Spinjitzu masters.",
        image: "/NinjagoMedia/IMG/images/serie/season1/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep11/player1_url.html"
    },
    {
        title: "The Darkest Day",
        description: "The ninja face their greatest challenge yet as Lord Garmadon unveils the Golden Weapon.",
        image: "/NinjagoMedia/IMG/images/serie/season1/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season1/ep12/player1_url.html"
    },
    {
        title: "The Final Battle",
        description: "The ninja confront Lord Garmadon in a final attempt to save Ninjago.",
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
