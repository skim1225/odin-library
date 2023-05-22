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

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e) {
    


    
    myLibrary.push(book);
}

function displayBooks() {
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