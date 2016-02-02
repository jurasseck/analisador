var SpotifyStrategy = require('passport-spotify').Strategy;
var appKey = '3ae97be523734deea6e34ef522c127b6';
var appSecret = 'e80e3ebe29574cd28b553c150b80ab62';

module.exports = function(passport){

	passport.serializeUser(function(user, done){
		done(null, user);
	});

	passport.deserializeUser(function(obj, done){
		done(null, obj);

	});

	passport.use('spotify',new SpotifyStrategy({
		clientID: appKey,
		clientSecret: appSecret,
		callbackURL: 'http://localhost:3000/callback'
	},
	function(accessToken, refreshToken, profile, done) {
	    process.nextTick(function () {
	      return done(null, profile);
	  });
	}));

}
