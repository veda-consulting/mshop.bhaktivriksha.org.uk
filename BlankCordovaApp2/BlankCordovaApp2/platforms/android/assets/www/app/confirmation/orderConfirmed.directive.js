	angular
	.module('PrasadApp')
	.directive('login', function () {
		
		return {
			restrict    : 'E',
			templateUrl: '/app/confirmation/confirmation.template.html',
			controller: 'confirmation.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
