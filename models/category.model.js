import mongoose from 'mongoose';

const CategoryModal = mongoose.Schema({
	title: String,
});

const Category = mongoose.model('category', CategoryModal);
export default Category;
