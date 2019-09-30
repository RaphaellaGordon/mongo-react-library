const Author = require('../models/author');
const Book = require('../models/book');

const getAuthors = (req, res) => {
  Author.find()
  .then(authors => res.status(200).json(authors))
  .catch(err => res.status(400).json('Error: ' + err));
}

const postAuthor = (req, res) => {
  const author = req.body.author;
  const newAuthor = new Author({
    author
  })
  newAuthor.save()
    .then(author => res.status(201).send({author}))
    .catch(err => res.status(400).json('Error: ' + err));
}

const getAuthorByName = (req, res) => {
  Author.findOne({author: req.params.author})
    .then(author => res.status(200).send({author}))
    .catch(err => res.status(400).json('Error: ' + err));
}

const getBooksByAuthor = (req, res) => {
  Book.find({author: req.params.author})
    .then(books => res.status(200).send({books}))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = { 
  getAuthors, 
  postAuthor, 
  getAuthorByName,
  getBooksByAuthor 
}