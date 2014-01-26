var mongoose = require('mongoose')

module.exports = mongoose.model('Patch',{
	top: Number,
	left: Number,
	rows: Number,
	columns: Number,
	content: String
})