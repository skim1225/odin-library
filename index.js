let myLibrary = [];

window.addEventListener("load", init);

function init() {
    id('add-btn').addEventListener('click', addBookToLibrary);
    qsa('.remove-btn').forEach(e => {
        e.addEventListener('click', removeBook);
    });
    qsa('.read-btn').forEach(e => {
        e.addEventListener('click', toggleRead);
    });
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = qs('#title').value;
    let author = qs('#author').value;
    let pages = qs('#pages').value;
    let read = qs('input[name=read]:checked').value;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    qs('main').innerText = '';
    myLibrary.forEach(n => {
        let book = gen('div');
        book.classList.add('book');
        let title = gen('h2');
        title.textContent = n.title;
        book.appendChild(title);
        let author = gen('p');
        author.textContent = n.author;
        book.appendChild(author);
        let pages = gen('p');
        pages.textContent = n.pages + " pages";
        book.appendChild(pages);
        let read = gen('p');
        read.textContent = n.read;
        book.appendChild(read);
        qs('main').appendChild(book);
    });

}

function removeBook(e) {
    myLibrary.splice()

}

function toggleRead(e) {

}

function qs(selector) {
    return document.querySelector(selector);
}

function qsa(selector) {
    return document.querySelectorAll(selector);
}

function id(id) {
    return document.getElementById(id);
}

function gen(tagName) {
    return document.createElement(tagName);
}