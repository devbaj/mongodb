var Quote = require ( './models' );
module.exports = {
	index : ( req , res ) => {
		res.render ( 'index' );
	},
	add_quote : ( req , res ) => {
		Quote.create ( {
			user : req.body.name,
			content : req.body.text
		} , ( err , quote ) => {
			console.log ( 'ERRORS' , err );
			console.log ( 'OBJECT' , quote );
		} );
		res.redirect ( '/quotes' );
	},
	show_quotes : ( req , res ) => {
		var quote_list = Quote.find( { } , ( err , quote_list ) => {
			console.log( 'QUOTES LIST' , quote_list );
			res.render ( 'quotes' , {quote_list} );
		} );
		
	}
}