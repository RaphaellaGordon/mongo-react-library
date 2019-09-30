import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Library</Link>
        <div>
          <ul>
            <li>
              <Link to="/addauthor">Add Author</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/addbook">Add Book</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}