let table = document.querySelector('tbody');
const form = document.querySelector('form');
const openModal = document.querySelector('#open-modal');
const modal = document.querySelector('#modal');
const close = document.querySelector('.close');
const submit = document.querySelector('#submit');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

submit.addEventListener('click', (event) => {
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const readStatus = document.querySelector('#status').value;
    const newBook = new Book(`${newTitle}`, `${newAuthor}`, `${readStatus}`);

    // add book to array
    libraryModule.addBook(newBook);
    table.innerHTML = '';
    libraryModule.displayBooks();

    // reset form and close modal
    form.reset();
    modal.style.display = 'none';

    event.preventDefault();
});

class Book {
    constructor(title, author, status = 'Not Read') {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

let libraryModule = (function () {
    let myLibrary = [];

    function addBook(book) {
        myLibrary.push(book);
    }

    function deleteBook(book) {
        const index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
        table.innerHTML = '';
        displayBooks();
    }

    function createDeleteBtn() {
        let newDeleteBtn = document.createElement('input');
        newDeleteBtn.type = 'button';
        newDeleteBtn.className = 'deleteBtn';
        newDeleteBtn.value = 'Delete';
        newDeleteBtn.classList.add('styled-dltBtn');
        return newDeleteBtn;
    }

    function createStatusButton(book) {
        let newStatusBtn = document.createElement('input');
        newStatusBtn.type = 'button';
        newStatusBtn.className = 'statusBtn';
        newStatusBtn.value = book.status;
        newStatusBtn.classList.add('styled-stsBtn');
        return newStatusBtn;
    }

    function displayBooks() {
        myLibrary.forEach((book) => {
            let row = table.insertRow();
            let titleCell = row.insertCell(0);
            let authorCell = row.insertCell(1);
            let statusCell = row.insertCell(2);
            let removeBook = row.insertCell(3);
            row.dataset.index = myLibrary.indexOf(book);
            let statusButton = createStatusButton(book);
            let deleteBtn = createDeleteBtn();

            titleCell.innerHTML = `${book.title}`;
            authorCell.innerHTML = `${book.author}`;
            statusCell.appendChild(statusButton);
            removeBook.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', () => {
                deleteBook(book);
            });

            statusButton.addEventListener('click', () => {
                book.status = book.status === 'Read' ? 'Not Read' : 'Read';
                statusButton.value = book.status;
            });
        });
    }

    return { myLibrary, addBook, deleteBook, displayBooks };
})();

libraryModule.addBook(new Book('To Kill a Mockingbird', 'Harper Lee'));
libraryModule.addBook(new Book('Pride and Prejudice', 'Jane Austen', 'Read'));
libraryModule.displayBooks();
