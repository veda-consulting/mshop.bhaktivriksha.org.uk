	angular
	.module('PrasadApp')
	.directive('checkoutContinue', function () {
		
		return {
			restrict    : 'E',
			templateUrl: '/app/checkout/checkoutContinue.template.html',
			controller: 'checkoutContinue.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
