import React, { Component } from 'react';
import axios from 'axios';

export default class AddAuthor extends Component {
  constructor(props) {
    super(props);

    this.state = {author: ''}
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const author = {
      author: this.state.author
    }

    axios.post('http://localhost:5000/authors', author)
      .then(res => console.log(res.data))
      .catch(err => console.log("Error: " + err));

    this.setState({
      author: ''
    })

    return (
      <p>new author has been added</p>
    )
  }

  render() {
    return (
    <div>
      <h3>Add new author</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-container">
          <label>Author's name: </label>
          <input
            className="input-text"
            type="text"
            required
            value={this.state.author}
            onChange={this.onChangeAuthor}
            />
        </div>
        <div className="form-submit">
          <input type="submit" value="Add Author" />
        </div>
      </form>
    </div>
    )
  }
}