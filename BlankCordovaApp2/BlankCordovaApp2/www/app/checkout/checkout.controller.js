//(function(angular){
//'use strict'

angular
.module('PrasadApp')
.controller('checkout.controller', ['$scope', '$rootScope', 'retrieveData', '$location', checkout]);

function checkout($scope, $rootScope, retrieveData, $location) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();


    ctrl.goToLogin = function () {

        var get = retrieveData.get();
        $location.path("login");        
    }


    var tempPrice = 0;
    var totalItems = 0;
    var i = 0;
    for (i = 0; i < ctrl.cartItems.length; i++) {
        tempPrice = tempPrice + ctrl.cartItems[i].qty * ctrl.cartItems[i].price;
        totalItems = totalItems + ctrl.cartItems[i].qty;
    }
    ctrl.totalPrice = tempPrice;
    ctrl.totalItems = totalItems;

}

//})(angular);