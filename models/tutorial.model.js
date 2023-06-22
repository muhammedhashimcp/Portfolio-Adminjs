import mongoose from 'mongoose';

const TutorialsModal = mongoose.Schema({
	title: String,
	link: String,
	tutorial_type: String,
});

const Tutorials = mongoose.model('tutorials', TutorialsModal);
export default Tutorials;
