// Book Class, Represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Store Class: Handles Storage
class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem("book") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("book"));
    }
    return books;
  }

  static addBook(book) {
    const storedBooks = Storage.getBooks();
    storedBooks.push(book);
    localStorage.setItem("book", JSON.stringify(storedBooks));
  }

  static deleteBook(isbn) {
    const storedBooks = Storage.getBooks();
    console.log(`!!!!!!!!! ${isbn}`);
    storedBooks.forEach((element, index) => {
      if (element.isbn === isbn) {
        storedBooks.splice(index, 1);
      }
    });
    localStorage.setItem("book", JSON.stringify(storedBooks))`~`;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displaybooks() {
    const books = Storage.getBooks();
    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }
  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm">X</td>
      `;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteBook(targetElement) {
    targetElement.parentElement.parentElement.remove();
  }

  static showAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-dismissible alert-danger`;
    if (message.includes("Congrat")) {
      alertDiv.style.backgroundColor = "#43ac6a";
    } else {
      alertDiv.style.backgroundColor = "#f04124";
    }
    alertDiv.innerHTML = `<strong>${message}.</strong>`;
    document
      .querySelector(".display-4")
      .insertAdjacentElement("beforebegin", alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }
}

// Events: Display Books
document.addEventListener("DOMContentLoaded", UI.displaybooks);

// Event: Add a Book
document.getElementById("button").addEventListener("click", (e) => {
  const title = document.querySelector("#author").value;
  const author = document.querySelector("#author").value;
  const isbc = document.querySelector("#isbn").value;
  if (title === "" || author === "" || isbc == "") {
    UI.showAlert("Please fill in all the fields");
  } else {
    book = new Book(title, author, isbc);
    Storage.addBook(book);
    UI.addBookToList(book);
    UI.showAlert("Congrats, you have added a book");
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  UI.showAlert("Book removed");
  Storage.deleteBook(e.target.parentElement.previousElementSibling.textContent);
});
