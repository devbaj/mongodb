var Person = require ( './models' );
module.exports = {
	index : ( req , res ) => {
		Person.find ( { } )
		.then ( data => {
			console.log ( 'displaying objects' , data );
			res.json ( { message : 'success' , data : data } );
		} )
		.catch ( err => {
			console.log ( 'query error' , err );
			res.json ( { message : 'Error' , error : err } );
		} )
	} ,
	add : ( req , res ) => {
		console.log ( req.params )
		Person.create( {
			name : req.params.name
		} )
		.then ( data => {
			console.log ( 'successfully added' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
	remove : ( req , res ) => {
		Person.findOneAndDelete ( { name : req.body.name } )
		.then ( data => {
			console.log ( data.name , 'successfully added' );
			res.json ( { message : 'Object removed' , data : data } );
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( { message : 'Could not remove' , error : err } );
		} )
	} ,
	read_one : ( req , res ) => {
		Person.findOne ( { name : req.body.name } )
		.then ( data => {
			console.log ( 'displaying document for' , data );
			res.json ( data );
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( { message : 'Could not find' , error : err } );
		} )
	}
}