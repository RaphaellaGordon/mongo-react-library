import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state= {
      title: '',
      authorsList:[],
      author: ''
    }
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

    axios.post('http://localhost:5000/books', book)
      .then(res => console.log(res.data))
      .catch(err => console.log("Error: " + err));
    
    this.setState({
      title: '',
      author: ''
    })

    return (
      <p>new book has been added</p>
    )
  }

  componentDidMount() {
    axios.get('http://localhost:5000/authors')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            authorsList: res.data.map((author) => author.author),
            author: res.data[0].author
          })
        }
      })
  }

  render() {
    return (
    <div>
      <div>
        Add a new book
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
          <input type="submit" value="Add Book" />
        </div>
        </div>
      </form>
    </div>
    )
  }
}