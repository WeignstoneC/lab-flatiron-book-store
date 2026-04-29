// Book store data
const bookStore = {
  name: "Flatbooks Technical Books",
  books: [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
      title: "JavaScript and JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/51h2+1xS8QL._SX397_BO1,204,203,200_.jpg"
    },
    {
      title: "You Don't Know JS: Scope & Closures",
      author: "Kyle Simpson",
      image: "https://images-na.ssl-images-amazon.com/images/I/51w1Q2NNFhL._SX331_BO1,204,203,200_.jpg"
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image: "https://images-na.ssl-images-amazon.com/images/I/41oYsXjLv8L._SX335_BO1,204,203,200_.jpg"
    }
  ]
};

// Step 1: Select the header element
const bookStoreTitle = document.getElementById('header');

// Step 2: Change the text content to match bookstore name
bookStoreTitle.textContent = bookStore.name;

// Step 3: Get the book list container
const bookList = document.getElementById('book-list');

// Remove the example book element if it exists
const exampleBook = document.getElementById('delete-this');
if (exampleBook) {
  exampleBook.remove();
}

// Step 4: Loop through every book and create elements
bookStore.books.forEach(function(book) {
  // Create elements for each book
  const bookContainer = document.createElement('li');
  bookContainer.className = 'list-li';
  
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');
  
  // Set text content
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;
  bookImage.alt = book.title;
  
  // Append elements to bookContainer
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);
  
  // Append bookContainer to bookList
  bookList.appendChild(bookContainer);
});
