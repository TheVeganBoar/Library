let myLibrary = []; // Empty Library Array

const formElement = document.querySelector('#formElement');

// Object Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add new books to library array
function addBookToLibrary() {
    let book = new Book (title, author, pages, read)
    myLibrary.push(book)
    addBooksToDisplay();
}


// Function to add books to display
function addBooksToDisplay() {
    const library = document.querySelector('.library');

    //Removing cards each time they get loaded -loop over array again- due to new book added
    const removeDivs = document.querySelectorAll('.card');
    for (let i=0; i<removeDivs.length; i++) {
        removeDivs(i).remove()
    }

    //Function that loops through the array and displays each book on the page
    myLibrary.forEach(book => {
        const card = document.createElement('div')
        card.classList.add('card') 
        library.appendChild(card)

        //card.style.height = '100px'
        //card.style.width = '100px'
        //card.style.backgroundColor = 'gray'

        for (let key in book) {
            const paragraph = document.createElement('p');
            paragraph.textContent = (`${key}: ${book[key]}`)
            card.appendChild(paragraph)
        }
    })
}

// To display form when clicking "Add" button
const addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', displayTheForm());

function displayTheForm(){
    formElement.style.display = 'inline';
}

// Transform input information into variables for Obj Constructor
function applyInput {
    let title = document.getElementById(title).value;

}


// To create card once form is completed
const create = document.querySelector('#create');
create.addEventListener('click', createBookCard());

function createBookCard(event) {
    addBookToLibrary();
    addBooksToDisplay();

    event.preventDefault();
}




addBooksToDisplay();