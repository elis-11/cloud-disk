import express from 'express';
import path from 'path';
import * as BooksController from './controllers/books.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3044;
const staticDirectory = path.join(__dirname, './public');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(staticDirectory));

app.get('/', async (req, res) => {
	const books = await BooksController.getAllBooks();
	res.render('index', {
		pageTitle: "Tech Bookstore",
		books
	});
});

app.listen(port, () => {
	console.log(`Now listening on port http://localhost:${port}`);
})