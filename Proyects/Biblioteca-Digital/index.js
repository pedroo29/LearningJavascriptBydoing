import Library from "./application/Library.js";

/*

Un poco sobre la arquitectura de la aplicación:

Mantenemos a los modelos unicamente como contenedores de datos o plantillas para objetos (Anemic Domain Model) y usamos servicios para la lógica, ya que la lógica involucra interacción entre diferentes entidades o clases

*/

const library = new Library();

async function fetchMany(callback) {
  const responseBooks = await fetch(
    "http://localhost:5173/src/business/mocks/books.json"
  );
  const books = await responseBooks.json();

  const responseUsers = await fetch(
    "http://localhost:5173/src/business/mocks/usuarios.json"
  );

  const users = await responseUsers.json();

  callback(books, users);
}

export default function initializeLibrary() {
  fetchMany((books, users) => {
    library.loadBooks(books);
    library.loadUsers(users);
  });

  console.log(library);
}
