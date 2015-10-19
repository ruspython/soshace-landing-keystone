var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Title Model
 * ==========
 */

var Title = new keystone.List('Title', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Title.add({
	title: { type: String, required: true },
	subtitle: { type: String },
	image: { type: Types.CloudinaryImage }
});

Title.register();
