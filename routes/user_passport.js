  
module.exports = function(router, passport) {
    console.log('user_passport 호출됨.');

    // 홈 화면
    router.route('/').get(function(req, res) {
        console.log('/ 패스 요청됨.');

        console.log('req.user의 정보');
        console.dir(req.user);

        // 인증 안된 경우
        if (!req.user) {
            console.log('사용자 인증 안된 상태임.');
            res.render('index.ejs', {login_success:false});
        } else {
            console.log('사용자 인증된 상태임.');
            res.render('index.ejs', {login_success:true});
        }
    });
    
    // 로그인 화면
    router.route('/login').get(function(req, res) {
        console.log('/login 패스 요청됨.');
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });
	 	 
    // 프로필 화면
    router.route('/profile').get(function(req, res) {
        console.log('/profile 패스 요청됨.');

        // 인증된 경우, req.user 객체에 사용자 정보 있으며, 인증안된 경우 req.user는 false값임
        console.log('req.user 객체의 값');
        console.dir(req.user);

        // 인증 안된 경우
        if (!req.user) {
            console.log('사용자 인증 안된 상태임.');
            res.redirect('/');
        } else {
            console.log('사용자 인증된 상태임.');
            console.log('/profile 패스 요청됨.');
            console.dir(req.user);

            if (Array.isArray(req.user)) {
                res.render('profile.ejs', {user: req.user[0]._doc});
            } else {
                res.render('profile.ejs', {user: req.user});
            }
        }
    });
	
    // 로그아웃
    router.route('/logout').get(function(req, res) {
        console.log('/logout 패스 요청됨.');
        req.logout();
        res.redirect('/');
    });


    // 로그인 인증
    /*router.route('/login').post(passport.authenticate('local-login', {
        successRedirect : '/profile', 
        failureRedirect : '/login', 
        failureFlash : true 
    }));*/ //사용 x OAuth 방식만 사용

    // passport - 페이스북 인증 / 콜백 라우팅 
    router.route('/auth/facebook').get(passport.authenticate('facebook', { 
        scope : 'email' 
    }));

    router.route('/auth/facebook/callback').get(passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    // passport - 네이버 인증 / 콜백 라우팅
    router.route('/auth/naver').get(passport.authenticate('naver',{
        scope : 'email'
    }));

    router.route('/auth/naver/callback').get(passport.authenticate('naver', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    // passport - 구글 인증 / 콜백 라우팅
    router.route('/auth/google').get(passport.authenticate('google',{
        scope : 'email'
    }));

    router.route('/auth/google/callback').get(passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

};