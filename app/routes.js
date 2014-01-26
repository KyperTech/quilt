var quilt = require('./quilt/controller')
    , patch = require('./patch/controller')
    , user = require('./user/controller')

module.exports = function(app){
	app.get('/api/quilt', quilt.view)
	app.post('/api/quilt', quilt.create)
	app.post('/api/quilt/:quiltId', quilt.update)
	app.delete('/api/quilt/:quiltId', quilt.destroy)

	app.get('/api/patch', patch.view)
	app.post('/api/patch', patch.create)
	app.post('/api/patch/:patchId', patch.update)
	app.delete('/api/patch/:patchId', patch.destroy)

	app.get('/api/user', user.view)
	app.post('/api/user', user.create)
	app.post('/api/user/:userId', user.update)
	app.delete('/api/user/:userId', user.destroy)

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html') // load the single view file (angular will handle the page changes on the front-end)
	})
}