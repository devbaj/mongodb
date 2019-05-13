const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/quoting_dojo' , { useNewUrlParser : true} );
var QuoteSchema = new mongoose.Schema ( {
	user : String ,
	content : String ,
	date_added : { type : Date , default : Date.now }
});
mongoose.model ( 'Quote', QuoteSchema );
var Quote = mongoose.model ( 'Quote' );
module.exports = Quote;