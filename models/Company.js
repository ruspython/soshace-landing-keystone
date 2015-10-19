var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Company Model
 * ==========
 */

var Company = new keystone.List('Company', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true }
});

Company.add({
	name: {type: String, required: true},
	title: { type: String },
	subtitle: { type: String },
	description: {type: Types.Textarea},
	skillDescription: {type: Types.Textarea},
	teamDescription: {type: Types.Textarea},
	testimonialDescription: {type: Types.Textarea},
	blogDescription: {type: Types.Textarea},
	email: {type: Types.Email},
	address: {type: String},
	phone: {type: String},
	backgroundImage: { type: Types.CloudinaryImage },
	photo: {type: Types.CloudinaryImage},
	elanceUrl: {type: Types.Url},
	upworkUrl: {type: Types.Url},
	happyClients: {type: Number},
	projectsCompleted: {type: Number},
	awardWon: {type: Number}
});

Company.register();
