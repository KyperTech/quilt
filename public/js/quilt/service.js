angular.module('quiltService' [])
  .factory('Quilts', function($http){
    return {
      get: function(){
      	return $http.get('/api/quilts')
      },
      create: function(quiltData){
      	return $http.post('/api/quilts', quiltData)
      },
      delete: function(id){
      	return $http.delete('/api/quilts/' + id)
      },
      update: function(id, quiltData){
      	return $http.post('/api/quilts/' + id, quiltData)
      }
    }
  })