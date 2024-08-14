import recordData from '../../data/records.json' assert { type: "json" };

const updateRecordById = (id, title, author, isbn, pages, available, genre) => {
    const record = recordData.records.find(record => record.id === id);

    if (!record) {
        throw new Error(`Record with id ${id} was not found!`);
    }

    record.title = title ?? record.title;
    record.author = author ?? record.author;
    record.isbn = isbn ?? record.isbn;
    record.pages = pages ?? record.pages;
    record.available = available ?? record.available;
    record.genre = genre ?? record.genre;

    return record;
}

export default updateRecordById;

/* Nullish Coalescing Operator ?? 

value1 ?? value2
if value1 is defined and not null, it will be chosen
if value1 is either undefined or null, value2 will be chosen instead

If a new title (or author, or any other property) is provided, use that to update the Record. 
But if it's not provided (it's null or undefined), just keep the original title (or author, etc.) 
of the Record. */