
angular
.module ('PrasadApp')
.controller('confirmation.controller', ['$scope', '$rootScope', 'retrieveData','$location','$http', login]);

function login($scope, $rootScope, retrieveData, $location, $http) {
    var ctrl = this;
    ctrl.cartItems = retrieveData.get();
    ctrl.totalQty = 0;
    ctrl.totalPrice = 0;
    var i= 0;

    ctrl.goToOrderConfirmedPage = function()
    {

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
            //{ test: { user: ctrl.user, cartItems: ctrl.cartItems } }
        };

        $http(req).then(function () { alert('Successfully placed order'); }, function () { alert('Failed in sending email');});


        //alert('Firstname' +ctrl.user.firstName);
        //alert('LastName' + ctrl.user.lastName);
        //alert(ctrl.user.phone);
        //alert(ctrl.user.addrLine1);
        //alert(ctrl.user.addrLine2);
        //alert(ctrl.user.postcode);
        //ctrl.cartItems.forEach(function (item) {
        //    alert(item.name);
        //    alert(item.qty);
        //});

        // ctrl.cartItems - contains the order items ;

        // Integrate email code here:
        $location.path("orderConfirmed");
    }
    ctrl.cartItems.forEach(function (item) {
        ctrl.totalQty = ctrl.totalQty + item.qty;
        ctrl.totalPrice = ctrl.totalPrice + item.qty * item.price;
    });

     ctrl.user = retrieveData.getUserData();
    
}
	
