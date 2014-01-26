var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var QuiltSchema = new Schema({
	owner: {type: Schema.ObjectId, ref: 'User'},
	patches: [{type: Schema.ObjectId, ref: 'Patch'}],
	rows: {type: Number},
	columns: {type: Number}
})

QuiltSchema.statics = {
	load: function (id, cb){
		this.findOne({_id : id }).populate('owner').exec(cb)
	}
}

mongoose.model('Quilt', QuiltSchema)