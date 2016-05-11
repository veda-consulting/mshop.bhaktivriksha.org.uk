
angular
.module('PrasadApp')
.controller('checkoutContinue.controller', ['$scope', '$rootScope', 'retrieveData', '$location', checkoutContinue]);

function checkoutContinue($scope, $rootScope, retrieveData, $location) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();



    ctrl.isGuestUser = retrieveData.isUserAGuestUser();

    ctrl.goToPayment = function () {

        var get = retrieveData.get();
        $location.path("payment");
        var userData = {firstName:ctrl.firstName,        
                        lastName:ctrl.lastName,
                        notes: ctrl.notes,
                        phone: ctrl.phone,
                        addrLine1: ctrl.addrLine1,
                        addrLine2: ctrl.addrLine2,
                        postcode: ctrl.postcode
        };
        retrieveData.setUserData(userData);
    }
}

//})(angular);