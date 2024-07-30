const episodesData = [
    {
        title: "Infamous",
        description: "The ninja become celebrities but soon face a new threat from the sky pirate Nadakhan.",
        image: "/NinjagoMedia/IMG/images/serie/season6/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep1/player1_url.html"
    },
    {
        title: "Public Enemy Number One",
        description: "The ninja are framed for crimes they didn't commit and must clear their names.",
        image: "/NinjagoMedia/IMG/images/serie/season6/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep2/player1_url.html"
    },
    {
        title: "Enkrypted",
        description: "The ninja are on the run and discover that Nadakhan has sinister plans involving wishes.",
        image: "/NinjagoMedia/IMG/images/serie/season6/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep3/player1_url.html"
    },
    {
        title: "Misfortune Rising",
        description: "The ninja infiltrate Misfortune's Keep to stop Nadakhan and his sky pirates.",
        image: "/NinjagoMedia/IMG/images/serie/season6/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep4/player1_url.html"
    },
    {
        title: "On a Wish and a Prayer",
        description: "The ninja continue their fight against Nadakhan as he gets closer to his goal.",
        image: "/NinjagoMedia/IMG/images/serie/season6/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep5/player1_url.html"
    },
    {
        title: "My Dinner with Nadakhan",
        description: "Jay devises a plan to defeat Nadakhan but must confront his deepest fears.",
        image: "/NinjagoMedia/IMG/images/serie/season6/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep6/player1_url.html"
    },
    {
        title: "Wishmasters",
        description: "Nadakhan's plan comes to fruition as he captures more wishes to rebuild Djinjago.",
        image: "/NinjagoMedia/IMG/images/serie/season6/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep7/player1_url.html"
    },
    {
        title: "The Last Resort",
        description: "The ninja make a last-ditch effort to stop Nadakhan and save Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season6/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep8/player1_url.html"
    },
    {
        title: "Operation Land Ho!",
        description: "The ninja must prevent Nadakhan from marrying Nya and gaining unlimited power.",
        image: "/NinjagoMedia/IMG/images/serie/season6/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep9/player1_url.html"
    },
    {
        title: "The Way Back",
        description: "The ninja face their final battle with Nadakhan to save Ninjago from his evil plans.",
        image: "/NinjagoMedia/IMG/images/serie/season6/10.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep10/player1_url.html"
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
