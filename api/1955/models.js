const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/1955' , { useNewUrlParser : true } );
var PersonSchema = new mongoose.Schema ( {
	name : String
} , {
	timestamps : true
} );
var Person = mongoose.model ( 'Person' , PersonSchema );
module.exports = Person;