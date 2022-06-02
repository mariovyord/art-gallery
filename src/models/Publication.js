const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const publicationSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	'painting technique': {
		type: String,
		required: true,
	},
	'art picture': {
		type: String,
		required: true,
	},
	'certificate of authenticity': {
		type: String,
		required: true,
		enum: ['Yes', 'No'],
	},
	'author': {
		type: Types.ObjectId,
		ref: 'User',
	},
	'users shared': {
		type: [Types.ObjectId],
		ref: 'User',
	}
});

const Publication = model('Publication', publicationSchema);

module.exports = Publication;
