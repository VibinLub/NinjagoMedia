const episodesData = [
    {
        title: "The Maze of the Mountain",
        description: "The ninja journey into the mysterious mountain to uncover ancient secrets and confront new challenges.",
        image: "/NinjagoMedia/IMG/images/serie/season13/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep1/player1_url.html"
    },
    {
        title: "The Secret of the Mountain",
        description: "The ninja discover a hidden secret within the mountain that could change the course of their adventure.",
        image: "/NinjagoMedia/IMG/images/serie/season13/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep2/player1_url.html"
    },
    {
        title: "The Hidden Threat",
        description: "A hidden threat emerges from within the mountain, challenging the ninja’s resolve and teamwork.",
        image: "/NinjagoMedia/IMG/images/serie/season13/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep3/player1_url.html"
    },
    {
        title: "The Mountain’s Power",
        description: "The ninja learn about the mountain’s powerful abilities and how it can be used to combat evil forces.",
        image: "/NinjagoMedia/IMG/images/serie/season13/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep4/player1_url.html"
    },
    {
        title: "The Clash of the Titans",
        description: "The ninja face off against a powerful adversary in an epic clash that tests their skills and determination.",
        image: "/NinjagoMedia/IMG/images/serie/season13/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep5/player1_url.html"
    },
    {
        title: "The Mountain King",
        description: "The ninja encounter the Mountain King, a formidable figure who holds the key to the mountain's greatest secrets.",
        image: "/NinjagoMedia/IMG/images/serie/season13/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep6/player1_url.html"
    },
    {
        title: "The Rise of the Elemental Masters",
        description: "The ninja witness the rise of the Elemental Masters and their role in the mountain’s power dynamics.",
        image: "/NinjagoMedia/IMG/images/serie/season13/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep7/player1_url.html"
    },
    {
        title: "The Battle for the Mountain",
        description: "An intense battle erupts for control of the mountain, with the ninja caught in the middle of the conflict.",
        image: "/NinjagoMedia/IMG/images/serie/season13/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep8/player1_url.html"
    },
    {
        title: "The Forbidden Chamber",
        description: "The ninja uncover a forbidden chamber within the mountain that holds powerful secrets and dangerous traps.",
        image: "/NinjagoMedia/IMG/images/serie/season13/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep9/player1_url.html"
    },
    {
        title: "The Lost City",
        description: "The ninja discover the lost city within the mountain and unlock its ancient mysteries.",
        image: "/NinjagoMedia/IMG/images/serie/season13/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep10/player1_url.html"
    },
    {
        title: "The Power Within",
        description: "The ninja tap into the mountain’s power to overcome their adversaries and protect their world.",
        image: "/NinjagoMedia/IMG/images/serie/season13/11.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep11/player1_url.html"
    },
    {
        title: "The Hidden Fortress",
        description: "The ninja discover a hidden fortress that serves as a stronghold for their enemies.",
        image: "/NinjagoMedia/IMG/images/serie/season13/12.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep12/player1_url.html"
    },
    {
        title: "The Final Trial",
        description: "The ninja face the final trial of the mountain, testing their skills and courage in a climactic showdown.",
        image: "/NinjagoMedia/IMG/images/serie/season13/13.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep13/player1_url.html"
    },
    {
        title: "The Elemental Battle",
        description: "An elemental battle ensues as the ninja harness their powers to defeat their enemies and save the mountain.",
        image: "/NinjagoMedia/IMG/images/serie/season13/14.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep14/player1_url.html"
    },
    {
        title: "The Last Stand",
        description: "In a final stand against their foes, the ninja use all their abilities to protect the mountain and their world.",
        image: "/NinjagoMedia/IMG/images/serie/season13/15.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep15/player1_url.html"
    },
    {
        title: "The End of the Mountain",
        description: "The ninja bring their adventure in the mountain to a close, with the world changed forever by their actions.",
        image: "/NinjagoMedia/IMG/images/serie/season13/16.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season13/ep16/player1_url.html"
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
