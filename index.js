const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Select and change header element
const header = document.getElementById('header');
header.textContent = bookStore.name;

// Select the book list
const bookList = document.getElementById('book-list');

// Remove the example li if it exists
const exampleLi = document.getElementById('delete-this');
if (exampleLi) {
    bookList.removeChild(exampleLi);
}

// Create and append elements for each book
bookStore.books.forEach(book => {
        // Create bookContainer (li)
        const bookContainer = document.createElement('li');
    
        // Create bookTitle (h3)
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
    
        // Create bookAuthor (p)
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = book.author;
    
        // Create bookImage (img)
        const bookImage = document.createElement('img');
        bookImage.src = book.imageUrl;
    
        // Append elements to bookContainer
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);
    
        // Append bookContainer to bookList
        bookList.appendChild(bookContainer);
});
const bookList = document.getElementById('book-list');

// Remove the example li
const exampleLi = document.getElementById('delete-this');
if (exampleLi) {
    bookList.removeChild(exampleLi);
}

// Create elements for each book
bookStore.books.forEach(book => {
        // Create bookContainer (li)
        const bookContainer = document.createElement('li');
    
        // Create bookTitle (h3)
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
    
        // Create bookAuthor (p)
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = book.author;
    
        // Create bookImage (img)
        const bookImage = document.createElement('img');
        bookImage.src = book.imageUrl;
    
        // Append elements to bookContainer
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);
    
        // Append bookContainer to bookList
        bookList.appendChild(bookContainer);
});

// Select the book list
const bookList = document.getElementById('book-list');

// Remove the example li
const exampleLi = document.getElementById('delete-this');
bookList.removeChild(exampleLi);

// Create elements for each book
bookStore.books.forEach(book => {
    // Create bookContainer (li)
    const bookContainer = document.createElement('li');
    
    // Create bookTitle (h3)
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    // Create bookAuthor (p)
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    
    // Create bookImage (img)
    const bookImage = document.createElement('img');
    bookImage.src = book.imageUrl;
    
    // Append elements to bookContainer
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);
    
    // Append bookContainer to bookList
    bookList.appendChild(bookContainer);
});
