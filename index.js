let myLibrary = [];

window.addEventListener("load", init);

function init() {
    displayBook();
    id('add-btn').addEventListener('click', addBookToLibrary);
    qsa('.remove-btn').addEventListener('click', removeBook);
    qsa('.read-btn').addEventListener('click', toggleRead);
}

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let book = new Book()
    myLibrary.push(book);
}

function displayBooks() {
    for (book in myLibrary) {

    }
}

function removeBook() {

}

function toggleRead() {
    
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