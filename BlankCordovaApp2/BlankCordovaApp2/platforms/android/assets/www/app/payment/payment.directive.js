//(function(angular){
	//'use strict';
	
	angular
	.module('PrasadApp')
	.directive('payment', function () {
		
		return {
			restrict    : 'E',
			templateUrl: '/app/payment/payment.template.html',
			controller: 'payment.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
//})(angular);