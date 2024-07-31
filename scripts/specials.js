// Sample specials data (replace with actual data)
const specialsData = [
    {
        title: "Pilot Movies",
        description: "The original pilot episodes that introduced the LEGO Ninjago series.",
        image: "./IMG/images/content/pilot.webp",
        seasonUrl: "./videoplayer/specials/pilots/pilot1.html"
    },
    // Add more specials data here...
];

// Function to dynamically populate the specials list
function populateSpecials() {
    const specialsList = document.getElementById('specials-list');
    specialsList.innerHTML = '';

    specialsData.forEach(special => {
        const specialItem = document.createElement('div');
        specialItem.classList.add('series');

        specialItem.innerHTML = `
            <img src="${special.image}" alt="${special.title}">
            <h2>${special.title}</h2>
            <p>${special.description}</p>
        `;

        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Watch Special';
        seasonBtn.addEventListener('click', () => window.location.href = special.seasonUrl);
        specialItem.appendChild(seasonBtn);

        specialsList.appendChild(specialItem);
    });
}

// Function to open trailer in new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Populate specials on page load
document.addEventListener('DOMContentLoaded', () => {
    populateSpecials();
});
