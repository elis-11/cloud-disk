import BooksModel from '../models/books.js';

export const getAllBooks = async () => {
	const books = await BooksModel.find({})
		.populate("author")
		.populate("customers")
		.populate("comments");
	return books;
}