export default class LoanService {
  constructor(userRepository, bookRepository) {
    this.bookRepository = bookRepository;
    this.userRepository = userRepository;
    this.loans = new Map(); // map de Book.id => User.id
  }

  borrowBook(userParam, bookParam) {
    const book = this.bookRepository.getById(bookParam.id);
    const user = this.userParam.getByID(userParam.id);

    if (!user || !book) {
      return {
        success: false,
        message:
          "Error en proceso de prestamo de libro, usuario o libro no encontrados",
      };
    }

    if (!book.available) {
      return {
        success: false,
        message: "Error en proceso de prestamo, libro no disponible",
      };
    }

    this.bookRepository.updateAvailability(book, user, false);

    return {
      success: true,
      message: `Libro: ${book.title} prestado a: ${user.name}`,
    };
  }

  returnBook(bookParam) {
    const book = this.bookRepository.getById(bookParam.id);

    if (!book || book.available) {
      return {
        success: false,
        message:
          "Error en proceso de devolución de libro, libro no encontrado o ya está devuelto",
      };
    }

    const userId = book.lentTo;
    const user = this.userRepository.getById(userId);

    if (!user) {
      return {
        success: false,
        message: "No fue encontrado el usuario que tiene el libro",
      };
    }

    this.bookRepository.updateAvailability(book, user, true);

    this.userRepository.removeBorrowedBook(book, user);

    return {
      success: true,
      message: "Libro devuelto",
    };
  }

  getActiveLoans() {
    return Array.from(this.loans.entries()).map((bookId, userId) => {
      const book = this.bookRepository.getById(bookId);
      const user = this.userRepository.getById(userId);

      return {
        book,
        user,
      };
    });
  }
}
