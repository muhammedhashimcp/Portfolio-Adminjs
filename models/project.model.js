import mongoose from 'mongoose';

const ProjectModal = mongoose.Schema({
	title: String,
	project_image: { type: String },
	live_url: { type: String },
	git_hub: { type: String },
	tutorials: { type: [] },
	blog: { type: String },
	progress: { type: String, default: 'planned' },
	started_at: Date,
	completed_at: Date,
	tags: { type: [], default: 'demo' },
});

const Project = mongoose.model('project', ProjectModal);
export default Project;
