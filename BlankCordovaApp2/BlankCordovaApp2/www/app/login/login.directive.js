	angular
	.module('PrasadApp')
	.directive('login', function () {
		
		return {
			restrict    : 'E',
			templateUrl :'/app/login/login.template.html',
			controller: 'login.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
