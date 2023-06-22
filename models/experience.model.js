import mongoose from 'mongoose';

const ExperienceModal = mongoose.Schema({
	position: String,
	company: String,
	experience_type:String,
	projects: { type: [] },
});

const Experience = mongoose.model('experience', ExperienceModal);
export default Experience;
