import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentsSchema = mongoose.Schema({
	message: String,
	datatime: String
}, { collection: "comments" });
const commentsModel = mongoose.model("Comment", commentsSchema);

export default commentsModel;