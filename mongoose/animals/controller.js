var Bird = require ( './models' );
module.exports = {
	index : ( req , res ) => {
		Bird.find ( { } , ( err , bird_list ) => {
			console.log( 'BIRD LIST' , bird_list );
			res.render ( 'index' , { bird_list } )
		} )
	} ,
	show_one_bird : ( req , res ) => {
		Bird.findById ( req.params.id , ( err , bird ) => {
			console.log ( 'BIRD INFO' , bird );
			res.render ( 'birdInfo' , { bird } );
		} );
	} ,
	add_bird_form : ( req , res ) => {
		res.render ( 'newBirdForm' )
	} ,
	process_add_bird : ( req , res ) => {
		Bird.create ( {
			name : req.body.name ,
			type : req.body.type ,
			age : req.body.age
		} , ( err , bird ) => {
			console.log ( err );
			res.redirect ( `birds/${bird._id}`);
		} )
	} ,
	edit_bird_form : ( req , res ) => {
		Bird.findById ( req.params.id , ( err , bird ) => {
			console.log ( err );
			res.render ( 'editBirdForm' , {bird} );
		} )
	} ,
	process_edit_bird : ( req , res ) => {
		Bird.findByIdAndUpdate ( req.params.id , {
			name : req.body.name ,
			type : req.body.type ,
			age : req.body.age
		} , ( err , bird ) => {
			res.redirect ( `/birds/${bird._id}` );
		} )
	} ,
	destroy_bird : ( req , res ) => {
		Bird.findByIdAndDelete ( req.params.id , err => {
			console.log ( err );
			res.redirect ( '/' );
		} )
	}
}