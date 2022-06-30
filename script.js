// Empty Library Array
let myLibrary = [];

// Object Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.info = function() {
    //    return (title + ' by ' + author + ', ' + pages + ' pages, ' + read + '.');
    //}
}

// Function to add new books to library array
function addBookToLibrary() {
    let book = new Book (title, author, pages, read)
    myLibrary.push(book)
}


// Function to add books to display
function addBooksToDisplay() {
    const library = document.querySelector('.library');

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


//const LOTR = new Book ('The Lord of The Rings', 'J.R.R. Tolkien', '800', 'read');
//console.log(LOTR.info());
