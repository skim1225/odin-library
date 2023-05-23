window.addEventListener("load", init);

function init() {
    id('add-btn').addEventListener('click', addBookToLibrary);
}

let myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary() {
    let title = qs('#title').value;
    let author = qs('#author').value;
    let pages = qs('#pages').value;
    let read = qs('input[name=read]:checked').value;
    let book = new Book(title, author, pages, read, myLibrary.length);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    qs('main').innerText = '';
    myLibrary.forEach(n => {
        let book = gen('div');
        book.classList.add('book');
        book.setAttribute('id', n.index);
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
        let readBtn = gen('button');
        readBtn.addEventListener('click', toggleRead);
        readBtn.textContent = 'Toggle Read';
        book.appendChild(readBtn);
        let delBtn = gen('button');
        delBtn.addEventListener('click', removeBook);
        delBtn.textContent = 'Remove Book';
        book.appendChild(delBtn);
        qs('main').appendChild(book);

    });
}

function removeBook(e) {
    let id = e.target.parentElement.id;
    myLibrary.splice(id, 1);
    displayBooks();
}

// todo: fix bug that changes button text instead of text
function toggleRead(e) {
    let text = e.target.parentElement.children[3].textContent;
    if (text === 'Have read') {
        e.target.parentElement.children[3].textContent = "Haven't read";
    } else {
        e.target.parentElement.children[3].textContent = 'Have read';
    }
}

function qs(selector) {
    return document.querySelector(selector);
}

function id(id) {
    return document.getElementById(id);
}

function gen(tagName) {
    return document.createElement(tagName);
}