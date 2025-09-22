import React, { useState } from "react";

export default function LibraryManagement() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add a new book
  const addBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove a book by index
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library">
      <h2>Library Management</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add New Book */}
      <div className="add-section">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-item">
            <span>
              <b>{book.title}</b> by {book.author}
            </span>
            <button onClick={() => removeBook(index)}>Remove</button>
          </div>
        ))}
      </div>

      {/* Styling */}
      <style jsx>{`
        .library {
          border: 2px solid #000;
          padding: 15px;
          margin: 10px auto;
          width: 600px;
          font-family: Arial, sans-serif;
        }
        .add-section {
          margin: 10px 0;
        }
        input {
          margin: 5px;
          padding: 6px;
        }
        button {
          padding: 6px 12px;
          margin-left: 5px;
          cursor: pointer;
        }
        .book-list {
          margin-top: 10px;
        }
        .book-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ccc;
          padding: 12px 15px;
          margin: 8px 0;
          border-radius: 6px;
          background: #f9f9f9;
          width: 95%;
        }
      `}</style>
    </div>
  );
}
