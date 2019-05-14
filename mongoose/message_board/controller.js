const Message = require ( './models' );
module.exports = {
	index : ( req , res ) => {
		// TODO : query all messages and everything
		Message.find ( { } , ( err , msgs ) => {
			console.log ( 'MESSAGES', msgs )
			res.render ( 'index' , {msgs})
		} )
	} ,
	send_comment : ( req , res ) => {
		Message.findByIdAndUpdate ( req.body.messageId , { $push : { comments : {
			name : req.body.name ,
			content : req.body.content
		} } } , ( err , data ) => {
			if ( err ) { console.log ( err ) }
			else { console.log ( 'COMMENT LIST IN COMMENT ADD ROUTE' , data.comments ) }
		} )
		res.redirect ( '/' );
	} ,
	send_message : ( req , res ) => {
		Message.create( {
			name : req.body.name ,
			content : req.body.msgContent
		} )
		res.redirect ( '/' );
	}
}