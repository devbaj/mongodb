const controller = require ( './controller' );

module.exports = app => {
	// TODO : query all users, messages, comments
	app.get ( '/' , controller.index ) // TODO : create template, create controller function
	app.post ( '/send_message' , controller.send_message );
	app.post ( '/send_comment' , controller.send_comment );
}