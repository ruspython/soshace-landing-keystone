var keystone = require('keystone');
var i18n = require('i18n');
// var Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {

	var MENU_ITEMS = ['about', 'skills', 'portfolio', 'team', 'upwork', 'contact'];
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.data = {
		company: {},
		features: {},
		skills: {},
		projectCategories: {},
		projects: {},
		developers: {},
		testimonials: {},
		menu: {}
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

	view.on('init', function (next) {
		//TODO: make middleware for that, move translation in a separate file
		var lang = req.cookies['lang'],
			langs = req.languages,
			currentLang = req.language.slice(0,2);
		if (langs.indexOf(lang) >= 0) {
			req.i18n.changeLanguage(lang);
		} else {
			req.i18n.changeLanguage('en');
		}

		MENU_ITEMS.forEach(function(item) {
			locals.data.menu[item] = req.t(item);
		});

		locals.data.t = req.t;
		next();

	});

	view.render('index');
};
