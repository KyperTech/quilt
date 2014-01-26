window.app = angular.module('quilt', ['controllers', 'services'])

window.angular.module('controllers', ['userController', 'quiltController', 'patchController'])
window.angular.module('services', ['userService', 'quiltService', 'patchService'])