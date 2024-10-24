const libraryList = document.querySelector('.table__list');
const modal = document.querySelector('.modal')
const addButton = document.querySelector('.button');
const closeButton = document.querySelector('.close');
const titleField = document.querySelector('.input__title');
const authorField = document.querySelector('.input__author');
const pagesField = document.querySelector('.input__pages');
const readField = document.querySelector('.input__read');
const modalAddButton = document.querySelector('.add');
let readToggle = document.querySelector('.toggle')
let index = 0;


document.addEventListener('DOMContentLoaded', () => {
    myLibrary.forEach((book, index) => renderBooks(book, index));
});

const myLibrary = [];

class Book {
    constructor(index, title, author, pages, read) {
        this.index = index;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
    }
}

function addBookToLibrary() {
    const userBook = new Book(index++, titleField.value, authorField.value, pagesField.value, readField.value);
    myLibrary.push(userBook);
    renderBooks(userBook)
    closeModal();
}

function removeBook(book) {
    myLibrary.splice(book.index, 1);

}

function readToggleHandle(e) {
    if (e.target.closest('li').querySelector('.haveread').textContent === 'Have read: True') {
        e.target.closest('li').querySelector('.haveread').textContent = 'Have read: False'
    } else {
        e.target.closest('li').querySelector('.haveread').textContent = 'Have read: True'
    }
}

function renderBooks(book) {
    const libraryItem = document.createElement('li')
    console.log(book.index);
    libraryItem.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Amount of pages: ${book.pages}</p>
    <p class="haveread">Have read: ${book.read}</p>
    <button class="remove" data-index="${book.index}">Remove</button>
<button class="toggle" >Read</button>
    `
    libraryList.append(libraryItem);
    libraryItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            removeBook(book);
            e.target.parentNode.remove();
        }

    })

    libraryItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle')) {
            readToggleHandle(e);
        }

    })
}

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}



addButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})

modalAddButton.addEventListener('click', addBookToLibrary);

