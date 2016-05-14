
angular
.module ('PrasadApp')
.controller('confirmation.controller', ['$scope', '$rootScope', 'retrieveData','$location','$http', login]);

function login($scope, $rootScope, retrieveData, $location, $http) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();
    ctrl.totalQty = 0;
    ctrl.totalPrice = 0;
    ctrl.showLoader = false;
    var i= 0;

    ctrl.goToOrderConfirmedPage = function()
    {
        ctrl.showLoader = true;

        var req = {
            method: 'POST',
            url: 'http://bhakthivrikshaapp.azurewebsites.net/api/email/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                firstName: ctrl.user.firstName,
                lastName: ctrl.user.lastName,
                addrLine1: ctrl.user.addrLine1,
                addrLine2: ctrl.user.addrLine2,
                postcode :ctrl.user.postcode,
                phone: ctrl.user.phone,
                order: ctrl.cartItems,
                emailto: 'deepti.kn@gmail.com',
                emailFrom: 'deepti.kn@gmail.com',
                emailsubject: 'Hare Krishna',
                emailmessage: 'HKHK'
            }          
        };

        $http(req).then(function ()
        {
            ctrl.showLoader = false;
            alert('Successfully placed order');
            $location.path("home");
        },
        function ()
        {
            ctrl.showLoader = false;
            alert('Failed in sending email');
            $location.path("home");
        });       
        
    }
    ctrl.cartItems.forEach(function (item) {
        ctrl.totalQty = ctrl.totalQty + item.qty;
        ctrl.totalPrice = ctrl.totalPrice + item.qty * item.price;
    });

     ctrl.user = retrieveData.getUserData();
    
}
	
