

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('../config');

module.exports = function(app, passport) {
	return new GoogleStrategy({
    	clientID: config.google.clientID,
    	clientSecret: config.google.clientSecret,
		callbackURL: config.google.callbackURL,
		profileFields: config.google.profileFields
	}, function(accessToken, refreshToken, profile, done) {
		console.log('passport의 google 호출됨.');
		console.dir(profile);
		
		var options = {
		    criteria: { 'google.id': profile.id }
		};
		
		var database = app.get('database');

	    database.UserModel.findOne(options, function (err, user) {
			if (err) return done(err);
      
			if (!user) {
				var user = new database.UserModel({
					name: profile.displayName,
			        email: profile.emails[0].value,
					provider: 'google',
					authToken: accessToken,
			        google: profile._json
				});
        
				user.save(function (err) {
					if (err) console.log(err);
					return done(err, user);
				});
			} else {
				return done(err, user);
			}
	    });
	});
};
