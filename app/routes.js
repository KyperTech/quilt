var async = require('async')

module.exports = function(app, passport, auth){
	var quilt = require('./quilt/controller')
	app.get('/api/quilts/:quiltId', quilt.show)
	app.get('/api/quilts', quilt.all)
	app.post('/api/quilts', quilt.create)
	app.post('/api/quilts/:quiltId', quilt.update)
	app.delete('/api/quilts/:quiltId', quilt.destroy)

	app.param('quiltId', quilt.quilt)

	var patch =  require('./patch/controller')
	app.get('/api/patches/:patchId', patch.show)
	app.get('/api/patches', patch.all)
	app.post('/api/patches', patch.create)
	app.post('/api/patches/:patchId', patch.update)
	app.delete('/api/patches/:patchId', patch.destroy)

	app.param('patchId', patch.patch)

	var user = require('./user/controller')
	app.get('/api/users/:userId', user.show)
	app.get('/api/signin', users.signin)
	app.get('/api/signout', users.signout)
	app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
	app.post('/api/users', user.create)
	app.get('/api/users/me', user.me)

	app.param('userId', user.user)

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html') // load the single view file (angular will handle the page changes on the front-end)
	})
}