//(function(angular){
	//'use strict';
	
	angular
	.module('PrasadApp')
	.directive('placeOrder',function(){
		
		return {
			restrict    : 'E',
			templateUrl :  '/app/order/placeOrder.template.html',
			controller: 'placeOrder.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})
	.directive('myclick', function () {
	    return function (scope, element, attrs) {
	        element.bind('touchstart click', function (event) {
	            event.preventDefault();                
	            event.stopPropagation();
	            scope.$apply(attrs['myclick']);
	        });
	    };
	});

//})(angular);