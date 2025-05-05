import BookRepository from "../repository/BookRepository.js";
import UserRepository from "../repository/UserRepository.js";
import LoanService from "../services/LoanService.js";

// Fachada de la biblioteca (patrón Facade)
export default class Library {
  constructor() {
    this.bookRepository = new BookRepository();
    this.userRepository = new UserRepository();
    this.loanService = new LoanService(
      this.userRepository,
      this.bookRepository
    );
  }

  loadBooks(books) {
    this.bookRepository.loadMany(books);
  }

  loadUsers(users) {
    this.userRepository.loadMany(users);
  }

  addBook(book) {
    this.bookRepository.add(book);
  }

  addUser(user) {
    this.userRepository.add(user);
  }

  borrowBook(userId, bookId) {
    return this.loanService.borrowBook(userId, bookId);
  }

  returnBook(bookId) {
    return this.loanService.returnBook(bookId);
  }

  getBook(bookId) {
    return this.bookRepository.getById(bookId);
  }

  getUser(userId) {
    return this.userRepository.getById(userId);
  }

  getActiveLoans() {
    return this.loanService.getActiveLoans();
  }
}
