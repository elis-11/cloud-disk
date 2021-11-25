import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentsSchema = mongoose.Schema({
	message: String,
	datetime: String
}, { collection: "comments" });
const commentsModel = mongoose.model("Comment", commentsSchema);

export default commentsModel;