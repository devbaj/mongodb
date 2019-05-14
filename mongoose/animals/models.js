const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/birds' , { useNewUrlParser : true } );
var BirdSchema = new mongoose.Schema ( {
	name : String ,
	type : String ,
	age : Number ,
}, { timestamps : true } );
mongoose.model ( 'Bird' , BirdSchema );
var Bird = mongoose.model ( 'Bird' );
module.exports = Bird;