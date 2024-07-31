// Array holding the data for each book
const booksData = [
    {
        title: "Book Title",
        description: "Description of the book.",
        image: "./IMG/images/content/Book_-_Cover.webp",
        seasonUrl: "./videoplayer/books/book.html"
    },
    // You can add more book objects here
];

// Function to dynamically populate the books list
function populateBooks() {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = ''; // Clear any existing content

    // Iterate over each item in booksData array
    booksData.forEach(book => {
        // Create a div for each book
        const bookItem = document.createElement('div');
        bookItem.classList.add('series');

        // Set the inner HTML of the div with the book's data
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>${book.description}</p>
        `;

        // Create and append a button for the book
        const seasonBtn = document.createElement('button');
        seasonBtn.classList.add('season-btn');
        seasonBtn.innerText = 'Read Book';
        seasonBtn.addEventListener('click', () => window.location.href = book.seasonUrl);
        bookItem.appendChild(seasonBtn);

        // Append the book item to the books list
        booksList.appendChild(bookItem);
    });
}

// Function to open trailer in a new tab
function openTrailer(trailerUrl) {
    window.open(trailerUrl, '_blank');
}

// Call populateBooks when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateBooks();
});
