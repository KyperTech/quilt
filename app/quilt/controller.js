var Quilt = require('./model')

module.exports = {
	view: function(req, res){
		Quilt.find(function (err, quilts ){
			if (err)
				res.send(err)
			res.json(quilts)
		})
	},
	create: function(req, res){
		Quilt.create({
			rows: req.body.rows,
			columns: req.body.columns
		}, function (err, quilts){
			if (err)
				res.send(err)
			Quilt.find(function (err, quilts){
				if (err)
					res.send(err)
				res.json(quilts)
			})
		})
	},
	update: function(req, res){
		Quilt.update({
			_id : req.params.quilt_id
		}, {
			$set : {
				rows: req.body.rows,
				columns: req.body.columns,
				patch: req.body.patch
			}
		}, function (err, quilts){
			if (err)
				res.send(err)
			Quilt.find(function (err, quilts){
				if (err)
					res.send(err)
				res.json(quilts)
			})
		})
	},
	destroy: function(req, res){
		Quilt.remove({
			_id : req.params.quilt_id
		}, function (err, quilts){
			if (err)
				res.send(err)
			Quilt.find(function (err, quilts){
				if (err)
					res.send(err)
				res.json(quilts)
			})
		})
	}
}
