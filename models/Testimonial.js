var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */

var Testimonial = new keystone.List('Testimonial', {
	map: { name: 'firstName' },
	autokey: { path: 'slug', from: 'firstName', unique: true }
});

Testimonial.add({
	firstName: {type: String, required: true},
	secondName: {type: String},
	photo: {type: Types.CloudinaryImage},
	position: {type: String},
	text: {type: Types.Textarea}
});

Testimonial.register();
