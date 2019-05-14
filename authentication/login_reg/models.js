const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/login_and_reg' , { useNewUrlParser : true } );

var nameValidator = name => {
	if ( name.length < 2 ) { return false }
	return true;
}

var emailValidator = email => {
	var EMAIL_REGEX = '^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$';
	if ( email.match ( EMAIL_REGEX) ) { return true }
	return false;
}

const UserSchema = new mongoose.Schema ( {
	first_name : {
		type : String ,
		required : [ true , 'A first name is required' ] ,
		validate : nameValidator
	} ,
	last_name : {
		type : String ,
		required : [ true , 'A last name is required' ] ,
		validate : nameValidator
	} ,
	email : {
		type : String ,
		required : [ true , 'Email is required' ] ,
		validate : emailValidator
	} ,
	pw_hash : { type : String , required : [ true , 'A password is required' ] } ,
	birthday : { type : Date , required : [ true , 'Birthday is required' ] } ,
} , {
	timestamps : true
} )



const User = mongoose.model ( 'User' , UserSchema );

module.exports = User;