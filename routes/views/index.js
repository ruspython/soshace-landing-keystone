var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.data = {
		company: {},
		projectCategories: {},
		projects: {},
		skills: {}
	};
	
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
			console.log(results)
			next(error);
		});
	});
	
	view.render('index');
};
