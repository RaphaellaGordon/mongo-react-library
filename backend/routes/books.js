const booksRouter = require('express').Router();
const {
  getBooks,
  postBook,
  getBookById,
  patchBookById,
  deleteBookById
} = require('../controllers/books')

booksRouter.route('/')
  .get(getBooks)
  .post(postBook)  

booksRouter.route('/:id')
  .get(getBookById)
  .patch(patchBookById)
  .delete(deleteBookById)

module.exports = booksRouter;