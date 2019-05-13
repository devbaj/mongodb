const User = require('./models');
module.exports = {
	index: (req,res) => {
		res.render('index');
	},
	add_user: (req,res,data) => {
		User.create(req.body, (err,data) => {
			console.log ( err );
			console.log ( req.body );
		})
	}
}