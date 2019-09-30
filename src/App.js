import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar";
import AddAuthor from "./components/add-author"
import AuthorList from "./components/author-list"
import AddBook from "./components/add-book"
import BookList from "./components/book-list";
import EditBook from "./components/edit-book";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/addauthor" component={AddAuthor} />
        <Route path="/authors" component={AuthorList} />
        <Route path="/addbook" component={AddBook} />
        <Route path="/books" component={BookList} />
        <Route path="/editbook/:id" component={EditBook} />
      </div>
    </Router>
  )
}

export default App;
