import mongoose from 'mongoose';

const UserModal = mongoose.Schema({
	email: String,
	uid: String,
	user_profile: Object,
	isDeleted: { type: Boolean, default: false },
	user_status: { type: String, default: 'Pending' },
	user_type: { type: String, default: 'demo' },
});

const User = mongoose.model('user', UserModal);
export default User;
