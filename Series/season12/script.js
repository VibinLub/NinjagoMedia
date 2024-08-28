const episodesData = [
    {
        title: "The Fire Chapter",
        description: "The ninja enter the virtual world of Prime Empire and face their first challenges in the game.",
        image: "/NinjagoMedia/IMG/images/serie/season12/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep1/player1_url.html"
    },
    {
        title: "The Maze of the Monastery",
        description: "The ninja navigate through a labyrinthine monastery to uncover clues about Prime Empire.",
        image: "/NinjagoMedia/IMG/images/serie/season12/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep2/player1_url.html"
    },
    {
        title: "The Phantom Ninja",
        description: "A mysterious Phantom Ninja disrupts the ninja's progress in the game, leading to a confrontation.",
        image: "/NinjagoMedia/IMG/images/serie/season12/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep3/player1_url.html"
    },
    {
        title: "The Collectors",
        description: "The ninja face a group of Collectors who are determined to capture them and claim their treasures.",
        image: "/NinjagoMedia/IMG/images/serie/season12/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep4/player1_url.html"
    },
    {
        title: "The Ninja Games",
        description: "The ninja participate in the Ninja Games, a series of challenges that test their skills and teamwork.",
        image: "/NinjagoMedia/IMG/images/serie/season12/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep5/player1_url.html"
    },
    {
        title: "The Wretched",
        description: "The ninja encounter the Wretched, a powerful group that poses a serious threat to their mission.",
        image: "/NinjagoMedia/IMG/images/serie/season12/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep6/player1_url.html"
    },
    {
        title: "The Ultimate Challenge",
        description: "The ninja face the ultimate challenge in Prime Empire as they battle to save their friends and stop the villain.",
        image: "/NinjagoMedia/IMG/images/serie/season12/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep7/player1_url.html"
    },
    {
        title: "The Battle for Prime Empire",
        description: "An epic battle unfolds in Prime Empire as the ninja fight to stop the game's antagonist and save their world.",
        image: "/NinjagoMedia/IMG/images/serie/season12/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep8/player1_url.html"
    },
    {
        title: "The Hidden Key",
        description: "The ninja search for a hidden key that could provide the answer to defeating the game's villain.",
        image: "/NinjagoMedia/IMG/images/serie/season12/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep9/player1_url.html"
    },
    {
        title: "The Final Level",
        description: "The ninja reach the final level of Prime Empire and prepare for their greatest challenge yet.",
        image: "/NinjagoMedia/IMG/images/serie/season12/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep10/player1_url.html"
    },
    {
        title: "The Last Stand",
        description: "In the season finale, the ninja make a final stand against the antagonist of Prime Empire to save their friends and their world.",
        image: "/NinjagoMedia/IMG/images/serie/season12/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep11/player1_url.html"
    },
    {
        title: "The Great Escape",
        description: "The ninja attempt a daring escape from Prime Empire's clutches and face new challenges along the way.",
        image: "/NinjagoMedia/IMG/images/serie/season12/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep12/player1_url.html"
    },
    {
        title: "The Redemption",
        description: "The ninja seek redemption for their previous failures as they continue their fight against the forces of Prime Empire.",
        image: "/NinjagoMedia/IMG/images/serie/season12/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep13/player1_url.html"
    },
    {
        title: "The Return to Reality",
        description: "The ninja return to reality after their adventure in Prime Empire, but they face lingering effects of their journey.",
        image: "/NinjagoMedia/IMG/images/serie/season12/14.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep14/player1_url.html"
    },
    {
        title: "The Final Showdown",
        description: "The final showdown in Prime Empire reaches its peak as the ninja confront their greatest enemy.",
        image: "/NinjagoMedia/IMG/images/serie/season12/15.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep15/player1_url.html"
    },
    {
        title: "The Legacy Lives On",
        description: "As Prime Empire comes to a close, the ninja reflect on their legacy and the impact of their adventures.",
        image: "/NinjagoMedia/IMG/images/serie/season12/16.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season12/ep16/player1_url.html"
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
