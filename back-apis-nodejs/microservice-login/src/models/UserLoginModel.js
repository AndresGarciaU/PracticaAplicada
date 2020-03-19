function UserLoginModel(user, password){

	let _user = user;
	let _password = password;

	return{

		getUser: function(){
			return _user;
		},
		getPassword: function(){
			return _password;
		},
		setUser: function(usr){
			_user = usr;
			return _user;
		},
		setPassword: function(pass){
			_password = pass;
			return pass;
		}

	};
}

module.exports = { UserLoginModel };