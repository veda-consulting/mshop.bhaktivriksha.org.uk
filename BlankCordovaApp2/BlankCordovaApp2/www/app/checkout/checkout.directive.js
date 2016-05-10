//(function(angular){
	//'use strict';
	
	angular
	.module('PrasadApp')
	.directive('checkout', function () {
		
		return {
			restrict    : 'E',
			templateUrl :'/app/checkout/checkout.template.html',
			controller: 'checkout.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
//})(angular);