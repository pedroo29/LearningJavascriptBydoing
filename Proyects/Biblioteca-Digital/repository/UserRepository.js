import User from "../models/User.js";

// repositorio usuarios
export default class UserRepository {
  constructor() {
    this.users = new Map();
  }

  loadMany(users) {
    users.forEach((user) => {
      const newUser = new User(
        user.name,
        user.id,
        user.memberType,
        user.email,
        user.borrowedBooks,
        user.historial
      );

      this.add(newUser);
    });
  }

  add(user) {
    this.users.set(user.id, user);
  }

  getById(bookId) {
    return this.users.get(bookId);
  }

  addBorrowedBook(book, userId) {
    const user = this.getById(userId);

    if (user) {
      user.borrowedBooks.push(book.title);
      user.historial.push(book.title);

      return true;
    }
    return false;
  }

  removeBorrowedBook(book, userId) {
    const user = this.getById(userId);

    if (user) {
      user.borrowedBooks = user.borrowedBooks.filter(
        (item) => item.id === book.id
      );

      return true;
    }
    return false;
  }
}
