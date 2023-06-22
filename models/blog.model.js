import mongoose from 'mongoose';

const BlogModal = mongoose.Schema({
	title: String,
	blog_type: { type: String, default: 'demo' },
	blog_url: { type: String, default: 'demo' },
	category: { type: String },
});

const Blog = mongoose.model('blog', BlogModal);
export default Blog;
