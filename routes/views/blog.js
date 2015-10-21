var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.postSection = true;
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		posts: []
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
	
	// Load the posts
	view.on('init', function(next) {
		
		var q = keystone.list('Post')
			//.paginate({
			//	page: req.query.page || 1,
			//	perPage: 10,
			//	maxPages: 10
			//})
			//TODO: infinite scroll would be better here
			.model.find()
			.where('state', 'published')
			.sort('-publishedDate')
			;
		
		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});
		
	});

	// Render the view
	view.render('blog');
	
};
