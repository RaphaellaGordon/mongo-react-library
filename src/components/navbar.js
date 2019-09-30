import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <ul>
            <li>
              <Link id="homepage-link" className="nav-link" to="/books">Library</Link>
            </li>
            <li>
              <Link className="nav-link" to="/addauthor">Add Author</Link>
            </li>
            <li>
              <Link className="nav-link" to="/authors">Authors</Link>
            </li>
            <li>
              <Link className="nav-link" to="/addbook">Add Book</Link>
            </li>
            <li>
              <Link className="nav-link" to="/books">Books</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}