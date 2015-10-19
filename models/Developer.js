var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Developer Model
 * ==========
 */

var Developer = new keystone.List('Developer', {
	map: { name: 'firstName' },
	autokey: { path: 'slug', from: 'firstName', unique: true }
});

Developer.add({
	firstName: {type: String, required: true},
	secondName: {type: String},
	photo: {type: Types.CloudinaryImage},
	position: {type: String},
	info: {type: Types.Textarea}
});

Developer.register();
