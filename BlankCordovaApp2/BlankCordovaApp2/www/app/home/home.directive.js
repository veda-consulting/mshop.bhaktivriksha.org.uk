//(function(angular){
	//'use strict';
	
	angular
	.module('PrasadApp')
	.directive('home',function(){
		
		return {
			restrict    : 'E',
			templateUrl :'/app/home/home.template.html',
			controller: 'home.controller',
		    require: '',
		    controllerAs: 'ctrl',
	        scope: false
			
		};	
	})	
//})(angular);