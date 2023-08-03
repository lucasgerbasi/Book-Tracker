// BookFormHUD.js
import React, { useState } from 'react';
import './BookFormHUD.css';

const BookFormHUD = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [currentPage, setCurrentPage] = useState('');
    const [isRead, setIsRead] = useState(false);
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
        // Hide the form after submitting the book
        setShowForm(false);
      }
    };

    const handleCancel = () => {
        setShowForm(false);
    }
  
    return (
        <div>
          <div className={`book-form-hud ${showForm ? "active" : ""}`}>
            {/* Black card container */}
            <div className="card-container">
              <form onSubmit={handleSubmit}>
                {/* Input fields for title, author, and current page */}
                <label>
                  Title:
                  <input
                    className="input-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Author:
                  <input
                    className="input-author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Current Page:
                  <input
                    className="input-current-page"
                    type="number"
                    value={currentPage}
                    onChange={(e) => setCurrentPage(e.target.value)}
                    required
                  />
                </label>
                <label class="checkbox-read">
              Read?
              <input class="input-checkbox"
                type="checkbox"
                checked={isRead}
                onChange={() => setIsRead((prev) => !prev)}
              />
            </label>
            <div>
                <button type="submit">Add to Library</button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
                </div>
              </form>
            </div>
          </div>
        
          <button className="add-button" onClick={() => setShowForm(true)}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      );
    };
  
  export default BookFormHUD;