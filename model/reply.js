var mongoose = require('mongoose');

var replySchema = {
	reples : [{
		writer : { type: mongoose.Schema.Types.ObjectId, ref : 'User', required: true }
		//writer_nick : { type: String, requried: true}
		content : { type: String, required: true },
		response : {
			like : { type: Number, required: true, defualt: 0},
			dislike : { type: Number, required: true, defualt: 0}
		}
	}]
}

module.exports = new mongoose.Schema(replySchema);
module.exports.replySchema = replySchema;