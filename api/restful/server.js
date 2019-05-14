const express = require ( 'express' );
const app = express ( );
const bodyParser = require ( 'body-parser' );
app.use ( bodyParser.json ( ) );
require ( './routes' ) ( app );
const server = app.listen ( 8000 , ( ) => {
	console.log ( 'server listening on port 8000' );
} )