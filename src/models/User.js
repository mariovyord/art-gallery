const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const userSchema = new Schema({
	'username': {
		type: String,
		required: true,
	},
	'password': {
		type: String,
		required: true,
	},
	'address': {
		type: String,
		required: true,
	},
	'my publications': {
		type: [Types.ObjectId],
		ref: 'Publication',
		default: [],
	}
});

const User = model('User', userSchema);

module.exports = User;
