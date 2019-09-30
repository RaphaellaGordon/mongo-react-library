const authorsRouter = require('express').Router();
const { 
  getAuthors, 
  postAuthor, 
  getAuthorByName,
  getBooksByAuthor 
} = require('../controllers/authors')

authorsRouter.route('/')
  .get(getAuthors)
  .post(postAuthor)

authorsRouter.route('/:author')
  .get(getAuthorByName)

authorsRouter.route('/:author/books')
  .get(getBooksByAuthor)

module.exports = authorsRouter;