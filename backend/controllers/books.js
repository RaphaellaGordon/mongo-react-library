const Book = require('../models/book');

const getBooks = (req, res) => {
  Book.find()
    .then(books => res.status(200).send({books}))
    .catch(err => res.status(400).json('Error: ' + err));
}

const postBook = (req, res) => {
  const {title, author} = req.body;
  const newBook = new Book({
    title,
    author
  })
  newBook.save()
    .then(book => res.status(201).send({book}))
    .catch(err => res.status(400).json('Error: ' + err));
}

const getBookById = (req, res) => {
  Book.findById({_id: req.params.id})
    .then(book => res.status(201).send({book}))
    .catch(err => res.status(400).json('Error: ' + err));
}

const patchBookById = (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.title = req.body.title

      book.save()
      .then(() => res.send('book updated'))
      .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

const deleteBookById = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(() => res.send('book deleted'))
  .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = {
  getBooks,
  postBook,
  getBookById,
  patchBookById,
  deleteBookById
}