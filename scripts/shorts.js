// Array holding the data for each short
const shortsData = [
    {
        title: "Short Title",
        description: "Description of the short.",
        image: "./IMG/images/content/Short_-_Cover.webp",
        seasonUrl: "./videoplayer/shorts/short.html"
    },
    // You can add more short objects here
];

// Function to dynamically populate the shorts list
function populateShorts() {
    const shortsList = document.getElementById('shorts-list');
    shortsList.innerHTML = ''; // Clear any existing content

    // Iterate over each item in shortsData array
    shortsData.forEach(short => {
        // Create a div for each short
        const shortItem = document.createElement('div');
        shortItem.classList.add('series');

        // Set the inner HTML of the div with the short's data
        shortItem.innerHTML = `
            <img src="${short.image}" alt="${short.title}">
            <h2>${short.title}</h2>
            <p>${short.description}</p>
        `;

        // Create and append a button for the short
        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Watch Short';
        seasonBtn.addEventListener('click', () => window.location.href = short.seasonUrl);
        shortItem.appendChild(seasonBtn);

        // Append the short item to the shorts list
        shortsList.appendChild(shortItem);
    });
}

// Function to open trailer in a new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Call populateShorts when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateShorts();
});
