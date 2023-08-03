// BookList.js
import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

const BookList = ({ books, onToggleRead, onRemoveBook }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onRemoveBook={onRemoveBook}
        />
      ))}
    </div>
  );
};

export default BookList;
