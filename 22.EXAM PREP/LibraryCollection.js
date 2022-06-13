class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.initialCapacity = capacity;
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity < 1) {
            throw new Error('Not enough space in the collection.')
        } else {
            let book = {
                bookName,
                bookAuthor,
                payed: false
            }
            this.books.push(book);
            this.capacity--;
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }

    }
    payBook(bookName) {
        let searchBook = this.books.find(b => b.bookName == bookName);
        if (!searchBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        searchBook.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let searchBook = this.books.find(b => b.bookName == bookName);
        if (!searchBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        } else if (searchBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            let index = this.books.indexOf(searchBook);
            this.books.splice(index, 1)
            return `${bookName} remove from the collection.`
        }
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let paid;
            let output = [];
            output.push(`The book collection has ${ this.initialCapacity - this.books.length } empty spots left.`)

            for (const book of this.books) {
                if (book.payed == true) {
                    paid = 'Has Paid'
                } else {
                    paid = 'Not Paid'
                }
                output.push(`${book.bookName} == ${book.bookAuthor} - ${paid}.`)

            }
            return output.join('\n');
        } else {
            this.books.filter(b => b.bookAuthor == bookAuthor);
            if (this.books.length > 0) {
                let paid;
                let output = [];
                for (const book of this.books) {
                    if (book.payed == true) {
                        paid = 'Has Paid'
                    } else {
                        paid = 'Not Paid'
                    }
                    output.push(`${book.bookName} == ${book.bookAuthor} - ${paid}.`)

                }
                return output.join('\n');

            } else {
                return `${bookAuthor} is not in the collection.`
            }
        }
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());