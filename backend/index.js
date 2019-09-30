const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(() => console.log(`Connected to MongoDB`))
.catch(err => console.log(err));

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});