var keystone = require('keystone');
// var Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.data = {
		company: {},
		features: {},
		skills: {},
		projectCategories: {},
		projects: {},
		developers: {},
		testimonials: {}
	};
	locals.indexSection = true;

	// Company Info
	view.on('init', function (next) {
		keystone.list('Company').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.company = results[0];
			}
			next(error);
		});
	});

	// Features
	view.on('init', function (next) {
		keystone.list('Feature').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.features = results;
			}
			next(error);
		});
	});

	// Skills
	view.on('init', function (next) {
		keystone.list('Skill').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.skills = results;
			}
			next(error);
		});
	});

	// Project Categories
	view.on('init', function (next) {
		keystone.list('ProjectCategory').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.projectCategories = results;
			}
			next(error);
		});
	});

	// Projects
	view.on('init', function (next) {
		keystone.list('Project').model.find().populate('categories').exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.projects = results;
			}
			next(error);
		});
	});

	// Developers
	view.on('init', function (next) {
		keystone.list('Developer').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.developers = results;
			}
			next(error);
		});
	});

	// Testimonial
	view.on('init', function (next) {
		keystone.list('Testimonial').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			if (results.length) {
				locals.data.testimonials = results;
			}
			next(error);
		});
	});

	// Posts
	// view.on('init', function (next) {
	// 	keystone.list('Post').model.find().exec(function (error, results) {
	// 		if (error || !results.length) {
	// 			return next(error);
	// 		}
	// 		if (results.length) {
	// 			locals.data.posts = results;
	// 		}
	// 		next(error);
	// 	});
	// });

	// Contact Form
	// locals.section = 'contact';
	// locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	// locals.formData = req.body || {};
	// locals.validationErrors = {};
	// locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	// view.on('post', { action: 'contact' }, function(next) {
	//
	// 	var newEnquiry = new Enquiry.model(),
	// 	updater = newEnquiry.getUpdateHandler(req);
	// 	console.log(req.body);
	// 	updater.process(req.body, {
	// 		flashErrors: true,
	// 		fields: 'name, email, message',
	// 		errorMessage: 'There was a problem submitting your enquiry:'
	// 	}, function(err) {
	// 		if (err) {
	// 			locals.validationErrors = err.errors;
	// 		} else {
	// 			locals.enquirySubmitted = true;
	// 		}
	// 		next();
	// 	});
	//
	// });


	view.render('index');
};
