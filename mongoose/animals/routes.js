const controller = require ( './controller' );
module.exports = app => {
	app.get ( '/' , controller.index );
	app.get ( '/birds/new' , controller.add_bird_form );
	app.get ( '/birds/:id' , controller.show_one_bird );
	app.post ( '/birds' , controller.process_add_bird );
	app.get ( '/birds/edit/:id' , controller.edit_bird_form );
	app.post ( '/birds/:id' , controller.process_edit_bird );
	app.post ( '/birds/destroy/:id' , controller.destroy_bird );
}