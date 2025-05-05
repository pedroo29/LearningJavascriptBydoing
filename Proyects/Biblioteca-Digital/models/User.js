import getReturnDate from "../utils/getReturnDate.js";

// modelo usuario
export default class User {
  constructor(name, id, memberType, email, borrowedBooks, historial) {
    this.name = name;
    this.id = id;
    this.memberType = memberType;
    this.email = email;
    this.borrowedBooks = borrowedBooks;
    this.historial = historial;
  }
}
