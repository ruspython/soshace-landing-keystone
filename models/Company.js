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
	title: {type: String},
	subtitle: {type: String},
	rate: {type: Number},
	description: {type: Types.Textarea},
	skillDescription: {type: Types.Textarea},
	teamDescription: {type: Types.Textarea},
	testimonialDescription: {type: Types.Textarea},
	blogDescription: {type: Types.Textarea},
	emails: {type: String}, // Emails to send contact messages on
	supportEmail: {type: String}, // Support email
	address: {type: String},
	phone: {type: String},
	backgroundImage: {type: Types.CloudinaryImage},
	photo: {type: Types.CloudinaryImage},
	upworkUrl: {type: Types.Url},
	githubUrl: {type: Types.Url},
	skypeLogin: {type: String},
	happyClients: {type: Number},
	projectsCompleted: {type: Number},
	awardWon: {type: Number},
	years: {type: Number}
});

Company.register();
