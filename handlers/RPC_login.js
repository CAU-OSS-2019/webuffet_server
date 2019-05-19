

var RPC_login = function(params, callback) {
	console.log('JSON-RPC echo 호출됨.');

	console.log('json 통신 test');
	console.log(params);

	var UserEmail = params[0];
	var UserId = params[1];

	console.log("Email : "+UserEmail+" ID : "+UserId);
	
	callback(null, params);
};

module.exports = RPC_login;

