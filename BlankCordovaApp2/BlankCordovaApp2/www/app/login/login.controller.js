
angular
.module ('PrasadApp')
.controller('login.controller', ['$scope', '$rootScope', 'retrieveData','$location', login]);

function login($scope, $rootScope, retrieveData, $location) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();

    ctrl.authenticate = function () {
        
        retrieveData.setAsLoggedInUser();
        	    $location.path("checkoutContinue");
    };
    ctrl.continueAsGuest = function () {
        retrieveData.setAsGuestUser();
        $location.path("checkoutContinue");
    };

}
	
