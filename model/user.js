var mongoose = require('mongoose');

var userSchema = {
	_id : { type: String, required: true, unique: true },
	pwd : { type: String, required: true }
}

module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;