var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var PatchSchema = new Schema({
	quilt: {type: Schema.ObjectId, ref: 'Quilt'},
	rows: {type: Number},
	columns: {type: Number},
	top: {type: Number},
	left: {type: Number},
	content: {type: String}
})

PatchSchema.statics = {
	load: function (id, cb){
		this.findOne({_id : id }).populate('quilt').exec(cb)
	}
}

mongoose.model('Patch', PatchSchema)
