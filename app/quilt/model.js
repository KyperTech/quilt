var mongoose = require('mongoose')
    , Patch = require('../patch/model')

module.exports = mongoose.model('Quilt',{
	patch: [Patch],
	rows: Number,
	column: Number
})