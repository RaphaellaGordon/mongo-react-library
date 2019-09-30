import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AuthorList extends Component {
  constructor(props) {
    super(props);

    this.state = {authors: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/authors/')
      .then(res => {
        this.setState({
          authors: res.data.map(author => {
            return {id: author._id, name: author.author}
          })

        })
      })
      .catch(err => console.log(err))

      
  }

  authorList = () => { 
    if (this.state.authors.length > 0) {
      return this.state.authors.map(author => {
        return (
          <tr key={author.id}>
            <td>{author.name}</td>
          </tr>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h3>List of authors</h3>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.authorList()}
          </tbody>
        </table>
      </div>
    )
  }
}
