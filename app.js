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



document.addEventListener('DOMContentLoaded', () => {
    myLibrary.forEach(book => renderBooks(book));
});

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
    }
}

function addBookToLibrary() {
    const userBook = new Book(titleField.value, authorField.value, pagesField.value, readField.value);
    myLibrary.push(userBook);
    renderBooks(userBook)
    closeModal();
    removeBook();
    toggleRead()
}

function removeBook() {
    let removeBookButton = document.querySelectorAll('.remove')
    const buttons = [...removeBookButton];
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove();
        })
    })
}

function readToggleHandle() {
    let status = document.querySelector('.haveread');
    if (status.textContent === 'Have read: True') {
        status.textContent = 'Have read: False'
    } else {
        status.textContent = 'Have read: True';
    }
}


function toggleRead() {
    const readToggle = document.querySelectorAll('.toggle')
    const toggleButtons = [...readToggle];
    toggleButtons.forEach(button => {
        button.addEventListener('click', readToggleHandle)

    }
    )
}



function renderBooks(book) {
    const libraryItem = document.createElement('li')

    libraryItem.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Amount of pages: ${book.pages}</p>
    <p class="haveread">Have read: ${book.read}</p>
    <button class="remove">Remove</button>
<button class="toggle">Read</button>
    `
    libraryList.append(libraryItem);
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
modalAddButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addBookToLibrary();
    }
})

