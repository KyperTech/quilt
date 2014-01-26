angular.module('quiltController', [])
  .controller('dashController', function($scope, $http, Quilts){
    $scope.newQuiltForm = {}
    $scope.editQuiltForm = {}

    Quilts.get()
      .success(function (data){
        $scope.quilts = data
      })

    $scope.createQuilt = function(){
      if (!$.isEmptyObject($scope.newQuiltForm)){
        Quilts.create($scope.newQuiltForm)
          .success(function (data){
            $scope.newQuiltForm = {}
            $scope.quilts = data
          })
      }

    $scope.updateQuilt = function (id){
      if (!$.isEmptyObject($scope.editQuiltForm)){
        Quilts.update(id, $scope.editQuiltForm)
          .success(function (data){
            $scope.editQuiltForm = {}
            $scope.quilts = data
          })
      }

      $scope.deleteQuilt = function (id){
        Quilts.delete(id)
          .success(function (data){
            $scope.quilts = data
          })
      }
    }
    }
  })