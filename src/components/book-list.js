import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {books: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/books/')
      .then(res => {
        this.setState({
          books: res.data.books.map(book => {
            return {
              id: book._id,
              title: book.title,
              author: book.author
            }
          })
        })
      })
      .catch(err => console.log(err))
  }

  deleteBook = (id) => {
    axios.delete('http://localhost5000/books/' + id)
      .then(res => console.log(res.data))
    
    this.setState({
      books: this.state.books.filter(book => book.id !== id)
    })
  }

  bookList = () => {
    return this.state.books.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>
            <Link to={"/editbook/"+book.id}>edit</Link>
            |
            <a href="#" onClick={() => {this.deleteBook(book.id)}}>delete</a>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>List of books</h3>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.bookList()}
          </tbody>
        </table>
      </div>
    )
  }
}