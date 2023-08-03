import React, { useState } from 'react';
import Header from './Header';
import BookList from './BookList';
import BookForm from './BookForm';
import BookFormHUD from './BookFormHUD';
import './App.css';


function App() {

  const [books, setBooks] = useState([]); // Define the books state and set it to an empty array
  const [showHUD, setShowHUD] = useState(false); // State to toggle the HUD's visibility
  const handleAddBook = (newBook) => {   // Function to add a new book to the list
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <Header title="Book Read Tracker" description="Keep track of the books you read!" />
      <button className="add-button" onClick={() => setShowHUD(!showHUD)}>
        <i className="fas fa-plus"></i>
      </button>
      <BookForm onAddBook={handleAddBook} /> {/* Pass the onAddBook function to BookForm */}
      <BookList books={books} /> {/* Pass the books array to BookList */}
      <BookFormHUD onAddBook={handleAddBook} /> {/* Pass the onAddBook function to BookFormHUD */}
    </div>
  );
}

export default App;
