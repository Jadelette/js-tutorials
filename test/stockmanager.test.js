const stockManager = require('../app/stockmanager');

// This test checks that the stock manager correctly reports thatthere are 5 different titles in stock.
test('Check that there are 5 titles in stock', () => {
expect(stockManager.getStock().length).toBe(5);
});

// This test checks that the stock manager can correctly fetch a book by ISBN number
// HINT For this one you should be able to use the ES6 filter method:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

test('Check that the stock manager can fetch a book by ISBN', () => {

//Given
const isbnNUmberToCheck = "784-461";
//When

const book = stockManager.getBookByIsbn(isbnNUmberToCheck);

//Then
expect(book.title).toBe("The Witches");
});


// This test checks that the stock manager can correctly report how many copies are present for a particular book.
// Each book is identified by an ISBN number
test('Check that the stock manager can report the number of copies available for a particular book', () => {

    //Given
const isbnNUmberToCheck = "123-456";

//Then
expect(stockManager.getCopiesForBook(isbnNUmberToCheck)).toBe(3);
});

//This test checks to see if stock manager can correctly identify books by the same author
test('check that books by same author are correctly identified', () => {
//Given
let authorToCheck = 'Roald Dahl';

//When
const titles = stockManager.getBooksByAuthor(authorToCheck);

//Then
expect(titles[0].title).toBe("Fantastic Mr Fox");
expect(titles[1].title).toBe("James and the Giant Peach");
expect(titles[2].title).toBe("The Witches");
});
