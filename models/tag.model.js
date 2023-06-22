import mongoose from 'mongoose';

const TagModal = mongoose.Schema({
	title: String,
	category: String,
});

const Tag = mongoose.model('tag', TagModal);
export default Tag;
