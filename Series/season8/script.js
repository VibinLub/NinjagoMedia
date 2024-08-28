const episodesData = [
    {
        title: "The Mask of Deception",
        description: "Lloyd and the ninja uncover a dangerous threat involving a cult that seeks to revive Lord Garmadon using ancient Oni Masks.",
        image: "/NinjagoMedia/IMG/images/serie/season8/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep1/player1_url.html"
    },
    {
        title: "The Jade Princess",
        description: "The ninja are assigned to protect Princess Harumi, the 'Jade Princess,' who might be the key to stopping the Sons of Garmadon.",
        image: "/NinjagoMedia/IMG/images/serie/season8/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep2/player1_url.html"
    },
    {
        title: "The Oni and the Dragon",
        description: "Lloyd and Harumi investigate the origin of the Oni Masks, while the ninja face off against the Sons of Garmadon to retrieve one.",
        image: "/NinjagoMedia/IMG/images/serie/season8/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep3/player1_url.html"
    },
    {
        title: "Snake Jaguar",
        description: "Zane goes undercover to infiltrate the Sons of Garmadon, but his mission becomes dangerous when he faces a deadly opponent, Mr. E.",
        image: "/NinjagoMedia/IMG/images/serie/season8/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep4/player1_url.html"
    },
    {
        title: "Dead Man's Squall",
        description: "The ninja must survive a deadly storm and prevent the Sons of Garmadon from obtaining the final Oni Mask.",
        image: "/NinjagoMedia/IMG/images/serie/season8/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep5/player1_url.html"
    },
    {
        title: "The Quiet One",
        description: "Lloyd uncovers the true identity of the Quiet One, the leader of the Sons of Garmadon, leading to shocking revelations.",
        image: "/NinjagoMedia/IMG/images/serie/season8/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep6/player1_url.html"
    },
    {
        title: "Game of Masks",
        description: "The ninja race against time to stop the Sons of Garmadon from resurrecting Lord Garmadon using the three Oni Masks.",
        image: "/NinjagoMedia/IMG/images/serie/season8/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep7/player1_url.html"
    },
    {
        title: "Dread on Arrival",
        description: "The Sons of Garmadon successfully resurrect Lord Garmadon, and the ninja face their greatest challenge yet as they try to stop him.",
        image: "/NinjagoMedia/IMG/images/serie/season8/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep8/player1_url.html"
    },
    {
        title: "True Potential",
        description: "Lloyd must confront his own fears and doubts to unlock his true potential in order to defeat the resurrected Lord Garmadon.",
        image: "/NinjagoMedia/IMG/images/serie/season8/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep9/player1_url.html"
    },
    {
        title: "Big Trouble, Little Ninjago",
        description: "In the season finale, the ninja fight to save Ninjago City from the wrath of Lord Garmadon and his newfound power.",
        image: "/NinjagoMedia/IMG/images/serie/season8/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season8/ep10/player1_url.html"
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
