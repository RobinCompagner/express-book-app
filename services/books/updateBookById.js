import bookData from '../../data/books.json' assert { type: "json" };

const updateBookById = (id, title, author, isbn, pages, available, genre) => {
    const book = bookData.books.find(book => book.id === id);

    if (!book) {
        throw new Error(`Book with id ${id} was not found!`);
    }

    book.title = title ?? book.title;
    book.author = author ?? book.author;
    book.isbn = isbn ?? book.isbn;
    book.pages = pages ?? book.pages;
    book.available = available ?? book.available;
    book.genre = genre ?? book.genre;

    return book;
}

export default updateBookById;

/* Nullish Coalescing Operator ?? 

value1 ?? value2
if value1 is defined and not null, it will be chosen
if value1 is either undefined or null, value2 will be chosen instead

If a new title (or author, or any other property) is provided, use that to update the book. 
But if it's not provided (it's null or undefined), just keep the original title (or author, etc.) 
of the book. */