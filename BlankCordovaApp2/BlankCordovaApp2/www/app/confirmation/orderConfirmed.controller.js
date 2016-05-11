
angular
.module ('PrasadApp')
.controller('orderConfirmed.controller', ['$scope', '$rootScope', 'retrieveData', '$location', login]);

function login($scope, $rootScope, retrieveData, $location) {
    var ctrl = this;
    retrieveData.set(undefined);
    retrieveData.setUserData(undefined);
    
}
	
