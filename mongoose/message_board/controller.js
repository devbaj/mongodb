const models = require ( './models' );
module.exports = {
	index : ( req , res ) => {
		// TODO : query all messages and everything
		models.Messages.find ( { } ).sort ( '-date' ).exec ( ( err , msgs ) => {
			res.render ( 'index' , {msgs})
		} )
	}
}