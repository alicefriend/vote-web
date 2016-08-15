var mongoose = require('mongoose');

var voteLogSchema = {
	user: { type: mongoose.Schema.Types.ObjectId, ref : 'User', required: true },
	logs: [{
		survey_id: { type: mongoose.Schema.Types.ObjectId, ref : 'Survey', required: true },
		date: { type: Date, required: true },
		choice: { type: Number, required: true }
	}]
}

module.exports = new mongoose.Schema(voteLogSchema);
module.exports.voteLogSchema = voteLogSchema;