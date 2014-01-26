var mongoose = require('mongoose')
    , Quilt = require('../quilt/model')

module.exports = mongoose.model('User',{
	email: String,
	quilt: [Quilt]
})