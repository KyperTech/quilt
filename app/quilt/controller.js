var mongoose = require('mongoose')
    , async = require('async')
    , Quilt = mongoose.model('Quilt')
    , _ = require('underscore')

module.exports = {
	quilt: function(req, res, next, id){
		Quilt.load(id, function (err, quilt){
			if (err)
				next(err)
			if (!quilt)
				res.send(err)
			req.quilt = quilt
			next()
		})
	},
	all: function(req, res){
		Quilt.find.populate('quilt').exec(function (err, quilts){
			if (err)
				res.send(err)
			res.json(quilts)
		})
	},
	show: function(req, res){
		res.json(req.quilt)
	},
	create: function(req, res){
		var quilt = new Quilt(req.body)
		quilt.owner = req.user
		
		Quilt.create({
			rows: req.body.rows,
			columns: req.body.columns,
			top: req.body.top,
			left: req.body.left,
			content: req.body.content
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
		var quilt = req.quilt
		quilt = _.extend(quilt, req.body)
		quilt.save(function (err){
			if (err)
				res.send(err)
			res.json(quilt)
		})
	},
	destroy: function(req, res){
		var quilt = req.quilt
		quilt.remove(function(err){
			if (err)
				res.send(err)
			res.json(quilt)
		})
	}
}