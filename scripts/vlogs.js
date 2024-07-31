// Array holding the data for each vlog
const vlogsData = [
    {
        title: "Vlog Title",
        description: "Description of the vlog.",
        image: "./IMG/images/content/Vlog_-_Cover.webp",
        seasonUrl: "./videoplayer/vlogs/vlog.html"
    },
    // You can add more vlog objects here
];

// Function to dynamically populate the vlogs list
function populateVlogs() {
    const vlogsList = document.getElementById('vlogs-list');
    vlogsList.innerHTML = ''; // Clear any existing content

    // Iterate over each item in vlogsData array
    vlogsData.forEach(vlog => {
        // Create a div for each vlog
        const vlogItem = document.createElement('div');
        vlogItem.classList.add('series');

        // Set the inner HTML of the div with the vlog's data
        vlogItem.innerHTML = `
            <img src="${vlog.image}" alt="${vlog.title}">
            <h2>${vlog.title}</h2>
            <p>${vlog.description}</p>
        `;

        // Create and append a button for the vlog
        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Watch Vlog';
        seasonBtn.addEventListener('click', () => window.location.href = vlog.seasonUrl);
        vlogItem.appendChild(seasonBtn);

        // Append the vlog item to the vlogs list
        vlogsList.appendChild(vlogItem);
    });
}

// Function to open trailer in a new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Call populateVlogs when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateVlogs();
});
