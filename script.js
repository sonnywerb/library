let myLibrary = [];
let table = document.querySelector('tbody');
const form = document.querySelector('form');

function Book(title, author, read = 'No') {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function deleteBook(book) {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    table.innerHTML = '';
    displayBooks();
}

function readBook(book, readCheckbox) {
    const index = myLibrary.indexOf(book);
    if (readCheckbox.checked) {
        myLibrary[index].read = 'Yes';
    } else {
        myLibrary[index].read = 'No';
    }
    console.log(book);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        let row = table.insertRow();
        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let readCell = row.insertCell(2);
        let removeBook = row.insertCell(3);
        row.dataset.index = myLibrary.indexOf(book);
        let deleteBtn = createDeleteBtn();

        let readCheckbox = createReadCheckbox(book);

        titleCell.innerHTML = `${book.title}`;
        authorCell.innerHTML = `${book.author}`;
        readCell.appendChild(readCheckbox);
        removeBook.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            deleteBook();
        });

        readCheckbox.addEventListener('change', () => {
            readBook(book, readCheckbox);
        });
    });
}

function createDeleteBtn() {
    let newDeleteBtn = document.createElement('input');
    newDeleteBtn.type = 'button';
    newDeleteBtn.className = 'deleteBtn';
    newDeleteBtn.value = 'Delete';
    return newDeleteBtn;
}

function createReadCheckbox(book) {
    let newRedCheckbox = document.createElement('input');
    newRedCheckbox.type = 'checkbox';
    newRedCheckbox.name = 'read';
    if (book.read === 'Yes') {
        newRedCheckbox.checked = true;
    }
    return newRedCheckbox;
}

// button to open modal
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
    const read = document.querySelector('#read');
    let newBook;

    if (read.checked === true) {
        newBook = new Book(`${newTitle}`, `${newAuthor}`, `Yes`);
    } else {
        newBook = new Book(`${newTitle}`, `${newAuthor}`);
    }

    // add book to array
    addBookToLibrary(newBook);
    console.log(myLibrary);

    table.innerHTML = '';

    displayBooks();

    // reset form and close modal
    form.reset();
    modal.style.display = 'none';

    event.preventDefault();
});
