var User = require('./model')

module.exports = {
	view: function(req, res){
		User.find(function (err, users ){
			if (err)
				res.send(err)
			res.json(users)
		})
	},
	create: function(req, res){
		User.create({
			email: req.body.email
		}, function (err, users){
			if (err)
				res.send(err)
			User.find(function (err, users){
				if (err)
					res.send(err)
				res.json(users)
			})
		})
	},
	update: function(req, res){
		User.update({
			_id : req.params.user_id
		}, {
			$set : {
				email: req.body.email,
				quilt: req.body.quilt
			}
		}, function (err, users){
			if (err)
				res.send(err)
			User.find(function (err, users){
				if (err)
					res.send(err)
				res.json(users)
			})
		})
	},
	destroy: function(req, res){
		User.remove({
			_id : req.params.user_id
		}, function (err, users){
			if (err)
				res.send(err)
			User.find(function (err, users){
				if (err)
					res.send(err)
				res.json(users)
			})
		})
	}
}
