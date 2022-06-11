const { compare, hash } = require('bcrypt');
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
	'publications': {
		type: [Types.ObjectId],
		ref: 'Publication',
		default: [],
	}
});

userSchema.methods.comparePassword = async function (password) {
	return await compare(password, this.password);
}

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await hash(this.password, 8);
		console.log('Hashing new password');
	}
	next();
})

const User = model('User', userSchema);

module.exports = User;
