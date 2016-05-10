//(function(angular){
//'use strict'

angular
.module ('PrasadApp')
.controller('payment.controller', ['$scope','$location', payment]);

function payment($scope,$location) {
	
    var ctrl = this;
    ctrl.paymentType = 'PayOnCollection';   

    ctrl.goToConfirmationPage = function () {
    
        $location.path("confirmation");
    };

}
	
//})(angular);