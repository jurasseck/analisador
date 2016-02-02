module.exports = function(app, passport){

	app.get('/', function(req, res, next) {
		res.render('index', { title: 'The ass revelation' });
	});

	app.get('/join', function(req,res){
		res.render('join', {title: 'Join'});
	});

	app.get('/join-spotify',
		passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
		function(req, res){});

	app.get('/callback',
		passport.authenticate('spotify', { failureRedirect: '/login' }),
		function(req, res) {
			res.redirect('/home');
	});

	app.get('/home', isLoggedIn, function(req,res){
		res.render('home', {title: 'Home', user: req.user._json});
	});

}

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}