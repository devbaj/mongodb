const controller = require ( './controller' );
module.exports = app => {
	app.get ( '/' , controller.index );
	app.post ( '/quotes' , controller.add_quote );
	app.get ( '/quotes' , controller.show_quotes );
}