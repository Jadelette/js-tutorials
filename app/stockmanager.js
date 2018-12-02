let stockOfBooks = [
    {
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    isbn: "435-678",
    copies: 10
    },
    {
    title: "You don't know JS",
    author: "Kyle Simpson",
    isbn: "123-456",
    copies: 3
    },
    {
    title: "James and the Giant Peach",
    author: "Roald Dahl",
    isbn: "784-782",
    copies: 2
    },
    {
    title: "The Witches",
    author: "Roald Dahl",
    isbn: "784-461",
    copies: 8
    },
    {
    title: "Catch 22",
    author: "Joseph Heller",
    isbn: "234-789",
    copies: 3
    }
    ];

    function getStock() {
    return stockOfBooks;
    };

    function getBookByIsbn(isbnNumberToCheck) {
    let result = stockOfBooks.filter(val => val.isbn == isbnNumberToCheck);
    return result[0];
    };

    function getCopiesForBook(isbnNumberToCheck) {
    let book = getBookByIsbn(isbnNumberToCheck);
    return book.copies;
    };

    function getBooksByAuthor(authorToCheck) {
        let result = stockOfBooks.filter(val => val.author == authorToCheck);
        return result;
    };

    function listTitlesByAuthor(authorToCheck){
        getBooksByAuthor(authorToCheck);
        for (i=0; i<=result.length; i++){
            console.log(result[i].title)
        };
    };

    module.exports = {
    getStock,
    getBookByIsbn,
    getCopiesForBook,
    getBooksByAuthor,
    listTitlesByAuthor
    };
    