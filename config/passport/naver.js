
var naverStrategy = require('passport-naver').Strategy;
var config = require('../config');

module.exports = function(app, passport) {
	return new naverStrategy({
    	clientID: config.naver.clientID,
    	clientSecret: config.naver.clientSecret,
    	callbackURL: config.naver.callbackURL
	}, function(accessToken, refreshToken, profile, done) {
		console.log('passport의 naver 호출됨.');
		console.dir(profile);
		
		var options = {
		    criteria: { 'naver.id': profile.id }
		};
		
		var database = app.get('database');
	    database.UserModel.findOne(options, function (err, user) {
			if (err) return done(err);
      
			if (!user) {
				var user = new database.UserModel({
					name: profile.displayName,
			        email: profile.emails[0].value,
			        provider: 'naver',
			        naver : profile._json
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