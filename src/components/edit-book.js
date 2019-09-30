import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      authorsList: [],
      id: ''
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/books/"+this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.book.title,
          author: res.data.book.author,
          id: res.data.book._id
        })
      })
      .catch(err => console.log('Error1 ' + err));

    axios.get('http://localhost:5000/authors/')
    .then(res => {
      if (res.data.length > 0) {
        this.setState({
          authorsList: res.data.map(author => author.author)
        })
      }
    })
    .catch(err => console.log("Error2 " + err));
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author
    }

    axios.patch("http://localhost:5000/books/"+this.props.match.params.id, book)
      .then(res => console.log(res.data))
      .catch(err => console.log("Error " + err));
    
    this.setState({
      title: ''
    })

    // window.location = '/';
  }

  render() {
    return (
      <div>
      <div>
        Edit book
      </div>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Title</label>
          <input 
            type="text"
            required
            value={this.state.title}
            onChange={this.onChangeTitle}/>

          <label>Author</label>
          <select
            required
            value={this.state.author}
            onChange={this.onChangeAuthor}>
              {this.state.authorsList.map((author) => {
                return <option key={author} value={author}>
                  {author}
                </option>
              })}
          </select>

          <div className="form-submit">
          <input type="submit" value="Edit Book" />
        </div>
        </div>
      </form>
    </div>
    )
  }
}