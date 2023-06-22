import mongoose from 'mongoose';

const ProjectCategoryModal = mongoose.Schema({
	title: String,
	tags: { type: [], default: 'demo' },
});

const ProjectCategory = mongoose.model('project-category', ProjectCategoryModal);
export default ProjectCategory;
