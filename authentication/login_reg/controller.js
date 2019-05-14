const User = require ( './models' );

const bcrypt = require ( 'bcrypt' );

module.exports = {
	index : ( req , res ) => {
		if ( 'userid' in req.session ) { res.redirect ( '/dashboard' ) }
		else { res.render ( 'index' ) };
	} ,
	add_new_user : ( req , res ) => {
		var pw_hash;
		bcrypt.hash( req.body.pw , 12 )
		.then ( hash => {
			pw_hash = hash;
			console.log ( "REQ BODY" , req.body );
			User.create ( {
				first_name : req.body.first_name ,
				last_name : req.body.last_name ,
				email : req.body.email ,
				pw_hash : pw_hash ,
				birthday : req.body.birthday
			} )
			.then ( data => {
				console.log ( data );
				req.session.userid = data.id;
				req.session.first_name = data.first_name;
				req.session.email = data.email;
				res.redirect ( '/dashboard' )
			} )
			.catch ( err => {
				console.log ( err );
				res.redirect ( '/' );
			} )
		} )
		.catch ( err => {
			console.log ( err );
		} )
	} ,
	log_in_user : ( req , res ) => {
		User.findOne( { email : req.body.email } )
		.then ( user => {
			bcrypt.compare ( req.body.pw , user.pw_hash )
			.then ( result => {
				req.session.userid = user._id ;
				req.session.first_name = user.first_name ;
				req.session.email = user.email;
				res.redirect ( '/dashboard' );
			} )
			.catch ( err => {
				console.log ( err );
				res.redirect ( '/' );
			} )
		} )
		.catch ( err => {
			console.log ( err );
			res.redirect ( '/' );
		} )
	} ,
	show_dashboard : ( req , res ) => {
		if ( 'userid' in req.session ) {
			res.render ( 'dashboard' , {user : req.session} );
		}
		else { res.redirect ( '/' ) };
	} ,
	logout : ( req , res ) => {
		req.session.destroy ( );
		res.redirect ( '/' );
	}
}