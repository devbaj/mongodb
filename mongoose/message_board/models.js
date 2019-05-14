const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/message_board' , { useNewUrlParser : true } );

const CommentSchema = new mongoose.Schema ( {
	name : { type : String , required : [ true , 'Name is required' ] } ,
	content : { type : String , required : [ true , 'A comment must have content' ] } ,
} , {
	timestamps : true
} )
const Comment = mongoose.model ( 'Comment' , CommentSchema );

const MessageSchema = new mongoose.Schema ( {
	name : { type : String , require : [ true , 'Name is required' ] } ,
	content : { type : String , require : [ true , 'A message must have content' ] } ,
	comments : [ CommentSchema ]
} , {
	timestamps : true
} )
const Message = mongoose.model ( 'Message' , MessageSchema );

module.exports = Message;