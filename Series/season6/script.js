const episodesData = [
    {
        title: "Infamous",
        description: "The ninja have become famous throughout Ninjago, but their fame attracts a new villain, Nadakhan the Djinn, who seeks revenge.",
        image: "/NinjagoMedia/IMG/images/serie/season6/1.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep1/player1_url.html"
    },
    {
        title: "Public Enemy Number One",
        description: "Nadakhan frames the ninja for crimes they didn't commit, turning the public against them. The ninja must clear their names while avoiding capture.",
        image: "/NinjagoMedia/IMG/images/serie/season6/2.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep2/player1_url.html"
    },
    {
        title: "Enkrypted",
        description: "Zane is captured by Nadakhan, who seeks to exploit his digital abilities. The remaining ninja must rescue Zane before it's too late.",
        image: "/NinjagoMedia/IMG/images/serie/season6/3.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep3/player1_url.html"
    },
    {
        title: "Misfortune Rising",
        description: "The ninja discover Nadakhan's plan to rebuild his destroyed realm using the Realm Crystal. They set out to stop him before he can succeed.",
        image: "/NinjagoMedia/IMG/images/serie/season6/4.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep4/player1_url.html"
    },
    {
        title: "On a Wish and a Prayer",
        description: "Nadakhan begins granting wishes with hidden consequences to manipulate the ninja. Jay must find a way to outsmart him.",
        image: "/NinjagoMedia/IMG/images/serie/season6/5.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep5/player1_url.html"
    },
    {
        title: "My Dinner with Nadakhan",
        description: "Jay confronts Nadakhan on his own, hoping to rescue Nya and prevent the djinn from using his final wish to destroy Ninjago.",
        image: "/NinjagoMedia/IMG/images/serie/season6/6.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep6/player1_url.html"
    },
    {
        title: "Wishmasters",
        description: "Nadakhan begins to assemble his crew of sky pirates, using the power of wishes to grow stronger. The ninja must stop him before he becomes unstoppable.",
        image: "/NinjagoMedia/IMG/images/serie/season6/7.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep7/player1_url.html"
    },
    {
        title: "The Last Resort",
        description: "The ninja, now desperate, seek out an ancient weapon capable of stopping Nadakhan. Time is running out as the djinn's power grows.",
        image: "/NinjagoMedia/IMG/images/serie/season6/8.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep8/player1_url.html"
    },
    {
        title: "Operation Land Ho!",
        description: "The ninja launch a daring mission to take down Nadakhan's sky fortress, but the djinn is always one step ahead of them.",
        image: "/NinjagoMedia/IMG/images/serie/season6/9.webp",
        episodeUrl: "/NinjagoMedia/videoplayer/series/Ninjago/season6/ep9/player1_url.html"
    },
    {
        title: "The Way Back",
        description: "In the thrilling season finale, Jay must use his final wish to undo all the damage Nadakhan has caused, but at a great personal cost.",
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
