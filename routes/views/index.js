var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	locals.data = {
		title: {}
	};
	
	view.on('init', function (next) {
		keystone.list('Title').model.find().exec(function (error, results) {
			if (error || !results.length) {
				return next(error);
			}
			locals.data.title = results;

			next(error);
		});
	});
	
	// Render the view
	view.render('index');
	
	
	
};
