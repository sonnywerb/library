function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.isRead = function isRead() {
    if (this.read === false) return 'not read yet';
    return 'read already';
};

Book.prototype.info = function info() {
    return `${this.title} by ${this.author}, ${
        this.pages
    } pages, ${this.isRead()}`;
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());
