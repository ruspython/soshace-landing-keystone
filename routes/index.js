var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	app.all('/', routes.views.index);
	app.get('/post/:post', routes.views.post);
	app.get('/blog', routes.views.blog);

	// API
	app.post('/message', routes.api.message);

	//app.post('/contact', routes.views.contact);
	//app.get('/gallery', routes.views.gallery);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
