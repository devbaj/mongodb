const controller = require( './controller' );
module.exports = app => {
	app.get ( '/' , controller.index );
	app.post ( '/process/adduser' , controller.add_new_user );
	app.post ( '/process/login' , controller.log_in_user );
	app.get ( '/dashboard' , controller.show_dashboard );
	app.get ( '/logout' , controller.logout );
}