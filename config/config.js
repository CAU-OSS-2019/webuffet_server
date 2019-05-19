

module.exports = {
	server_port: 3000,     // port starts at 3000
	db_url: 'mongodb://localhost:27017/local', //db-port : 27017 , db-name : local 
	db_schemas: [  
	    {file:'./user_schema', collection:'users6', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	],
	facebook: {		// passport facebook
		clientID: '0000',      // you need to generate Client ID & Secret for each Vender
		clientSecret: '0000',
		callbackURL: 'http://localhost:3000/auth/facebook/callback',
		profileFields : ['id','displayName', 'email']
	},
	naver: {		// passport naver
		clientID: '0000',
		clientSecret: '0000',
		callbackURL: 'http://localhost:3000/auth/naver/callback',
		profileFields : ['id','displayName', 'email']
	},
	google: {		// passport google
		clientID: '0000',
		clientSecret: '0000',
		callbackURL: '/auth/google/callback',
		profileFields : ['id','displayName', 'email']
	},
	jsonrpc_api_path: '/api'  //json_rpc path
}