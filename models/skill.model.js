import mongoose from 'mongoose';

const SkillModal = mongoose.Schema({
	title: String,
	icon: String,
	category: String,
	color:String
});

const Skill = mongoose.model('skill', SkillModal);
export default Skill;
