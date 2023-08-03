import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onToggleRead, onRemoveBook }) => {
  const { title, author, currentPage, isRead } = book;

  return (
    <div className="book-item">
      <div className="book-details">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Current Page: {currentPage}</p>
        <p>Status: {isRead ? 'Read' : 'Not Read'}</p>
      </div>
      <div className="book-actions">
        <button onClick={() => onToggleRead(book)}>
          {isRead ? 'Mark Unread' : 'Mark Read'}
        </button>
        <button onClick={() => onRemoveBook(book)}>Remove</button>
      </div>
    </div>
  );
};

export default BookItem;