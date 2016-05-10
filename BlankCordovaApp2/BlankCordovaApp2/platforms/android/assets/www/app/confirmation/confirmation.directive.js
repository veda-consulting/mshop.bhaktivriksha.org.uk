	angular
	.module('PrasadApp')
	.directive('orderConfirmed', function () {
		
		return {
			restrict    : 'E',
			templateUrl: '/app/confirmation/orderConfirmed.template.html',
			controller: 'orderConfirmed.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
