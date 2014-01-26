var mongoose = require('mongoose')
    , async = require('async')
    , Patch = mongoose.model('Patch')
    , _ = require('underscore')

module.exports = {
	patch: function(req, res, next, id){
		Patch.load(id, function (err, patch){
			if (err)
				next(err)
			if (!patch)
				res.send(err)
			req.patch = patch
			next()
		})
	}
	all: function(req, res){
		Patch.find.populate('quilt').exec(function (err, patches){
			if (err)
				res.send(err)
			res.json(patches)
		})
	},
	show: function(req, res){
		res.json(req.patch)
	},
	create: function(req, res){
		var patch = new Patch(req.body)
		patch.owner = req.user
		
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
		var patch = req.patch
		patch = _.extend(patch, req.body)
		patch.save(function (err){
			if (err)
				res.send(err)
			res.json(patch)
		})
	},
	destroy: function(req, res){
		var patch = req.patch
		patch.remove(function(err){
			if (err)
				res.send(err)
			res.json(patch)
		})
	}
}