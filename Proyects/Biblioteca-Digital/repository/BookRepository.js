import Book from "../models/Book.js";

// repositorio libros
export default class BookRepository {
  constructor() {
    this.books = new Map();
  }

  loadMany(books) {
    books.forEach((book) => {
      const newBook = new Book(
        book.id,
        book.title,
        book.author,
        book.year,
        book.genre,
        book.isbn,
        book.pages,
        book.publisher,
        book.language,
        book.cover,
        book.summary,
        book.rating,
        book.available,
        book.lentTo
      );

      this.add(newBook);
    });
  }

  getById(bookId) {
    return this.books.get(bookId);
  }

  add(book) {
    this.books.set(book.id, book);
  }

  updateAvailability(book, user, available) {
    // conseguir libro del objeto books
    const foundBook = this.getBookById(book.id);

    // con este código ya estamos modificando
    // el objeto original (this.books) por referencia
    if (foundBook) {
      // Modificar el objeto
      foundBook.available = available;
      foundBook.lentTo = user;

      return true;
    }

    return false;
  }
}
