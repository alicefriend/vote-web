var mongoose = require('mongoose');

var surveySchema = {
	title : { type: String, required: true, unique: true },
	items : [{
		label : { type: String, required: true },
		count : { type: Number, required: true, default: 0 }
	}]
}

module.exports = new mongoose.Schema(surveySchema);
module.exports.surveySchema = surveySchema;