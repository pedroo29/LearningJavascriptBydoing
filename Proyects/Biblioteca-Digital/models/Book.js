// modelo libro
export default class Book {
  constructor(
    id,
    title,
    author,
    year,
    genre,
    isbn,
    pages,
    publisher,
    language,
    cover,
    summary,
    rating,
    available,
    lentTo = null
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.isbn = isbn;
    this.pages = pages;
    this.publisher = publisher;
    this.language = language;
    this.cover = cover;
    this.summary = summary;
    this.available = available;
    this.rating = rating;
    this.lentTo = lentTo;
    this.available = available;

    this.validator();
  }

  // implementar validación para creación de libros
  validator() {
    // implementar lógica
  }
}
