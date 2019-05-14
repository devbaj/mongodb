const controller = require ( './controller' );

module.exports = app => {
	app.get ( '/' , controller.index );
	app.get ( '/new/:name' , controller.add );
	app.get ( '/remove/:name' , controller.remove );
	app.get ( '/:name' , controller.read_one);
}