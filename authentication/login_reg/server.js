const express = require ( 'express' );
const app = express ( );
const bodyParser = require ( 'body-parser' );
const session = require ( 'express-session' );
app.use ( session ( {
	secret : "Miku is best girl" ,
	resave : false ,
	saveUninitialized : true ,
	cookie : { maxAge : 60000 }
} ) );
app.use ( express.static ( __dirname + '/public' ) );
app.use ( bodyParser.urlencoded ( { extended : true } ) );
app.set ( 'views' , __dirname + '/views' );
app.set ( 'view engine' , 'ejs' );
require ( './routes' ) ( app );
const server = app.listen ( 8000 , () => {
	console.log ( 'listening on port 8000');
} )