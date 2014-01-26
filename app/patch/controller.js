var Patch = require('./model')

module.exports = {
	view: function(req, res){
		Patch.find(function (err, patches ){
			if (err)
				res.send(err)
			res.json(patches)
		})
	},
	create: function(req, res){
		Patch.create({
			rows: req.body.rows,
			columns: req.body.columns,
			top: req.body.top,
			left: req.body.left,
			content: req.body.content
		}, function (err, patches){
			if (err)
				res.send(err)
			Patch.find(function (err, patches){
				if (err)
					res.send(err)
				res.json(patches)
			})
		})
	},
	update: function(req, res){
		Patch.update({
			_id : req.params.patch_id
		}, {
			$set : {
				rows: req.body.rows,
			             columns: req.body.columns,
			             top: req.body.top,
			             left: req.body.left,
			             content: req.body.content
			}
		}, function (err, quilts){
			if (err)
				res.send(err)
			Patch.find(function (err, quilts){
				if (err)
					res.send(err)
				res.json(quilts)
			})
		})
	},
	destroy: function(req, res){
		Patch.remove({
			_id : req.params.patch_id
		}, function(err, patches){
			if (err)
				res.send(err)
			Patch.find(function (err, patches){
				if (err)
					res.send(err)
				res.json(patches)
			})
		})
	}
}