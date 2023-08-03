// BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [showForm, setShowForm] = useState(false); // Manage the visibility of the form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all input fields are filled before adding the book
    if (title && author && currentPage) {
      const newBook = {
        id: Date.now(),
        title,
        author,
        currentPage: parseInt(currentPage),
        isRead: false,
      };

      onAddBook(newBook);

      // Clear the input fields after adding the book
      setTitle('');
      setAuthor('');
      setCurrentPage('');
    }

    // Hide the form after submitting the book
    setShowForm(false);
  };

  const handleCancel = () => {
    // Hide the form when "Cancel" button is clicked
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <div className="form-overlay">
          <div className={`book-form-hud active`}>
            <form onSubmit={handleSubmit}>
              {/* Input fields for title, author, and current page */}
              {/* ... */}
              <button type="submit">Add Book</button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button className="add-button" onClick={() => setShowForm(true)}>
          <i className="fas fa-plus"></i>
        </button>
      )}
    </div>
  );
};

export default BookForm;
