let myLibrary = [];

function Book(title, author, read = 'No') {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        console.log(book);
    });
}
const percyJackson = new Book('Percy Jackson', 'Rick Rioridan');
const harryPotter = new Book('Harry Potter', 'J.K. Rowling');
const catInTheHat = new Book('The Cat In The Hat', 'Dr. Seuss', 'Yes');

addBookToLibrary(percyJackson);
addBookToLibrary(harryPotter);
addBookToLibrary(catInTheHat);
displayBooks();

// button to open modal
const openModal = document.querySelector('#open-modal');
const modal = document.querySelector('#modal');
const close = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});
