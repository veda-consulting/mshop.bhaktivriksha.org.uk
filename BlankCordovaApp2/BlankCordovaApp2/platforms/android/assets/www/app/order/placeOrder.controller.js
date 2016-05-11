//(function(angular){
//'use strict'

angular
.module('PrasadApp')
.controller('placeOrder.controller', ['$scope', '$rootScope', '$location', 'retrieveData', placeOrder]);



function placeOrder($scope, $rootScope, $location, retrieveData) {

    var ctrl = this;
    retrieveData.get();
    ctrl.cartItems = [];

    // Stub data


    ctrl.items = BhaktivrikshaAppOperations.Components.MenuItems();

    ctrl.category = 'Main';
    ctrl.main = ctrl.items.filter(filterCategory);
    ctrl.category = 'Desserts';
    ctrl.desserts = ctrl.items.filter(filterCategory);


    function filterCategory(item) {
        item.qty = 0;
        return item.category == ctrl.category;
    };

    ctrl.hub = 'Byron Avenue';
    ctrl.hideItem = false;

    ctrl.calc = function () {
        
        var tot = 0;
        for (i = 0; i < ctrl.main.length; i++) {
            var item = ctrl.main[i];
            if (item.qty > 0)
            {
                tot = tot + item.qty;
            }            
        }
        for (i = 0; i < ctrl.desserts.length; i++) {
            var item = ctrl.desserts[i];
            if (item.qty > 0) {
                tot = tot + item.qty;
            }
        }
        ctrl.totalQty =  tot;

    
        var totPrice = 0;
        for (i = 0; i < ctrl.main.length; i++) {
            var item = ctrl.main[i];
            if (item.qty > 0) {
                totPrice = totPrice + item.qty * item.price;
            }
        }
        for (i = 0; i < ctrl.desserts.length; i++) {
            var item = ctrl.desserts[i];
            if (item.qty > 0) {
                totPrice = totPrice + item.qty * item.price;
            }
        }
        ctrl.totalPrice= totPrice;
    }

    ctrl.add = function (item) {
        item.qty = item.qty + 1;        
        ctrl.calc();

    }
    ctrl.remove = function (item) {
        if (item.qty > 0) {
            item.qty = item.qty - 1;            
        }        
        ctrl.calc();
    }
    ctrl.goToCheckout = function () {

        for (i = 0; i < ctrl.main.length; i++) {
            var item = ctrl.main[i];
            if (item.qty > 0) {
                ctrl.cartItems
                .push({
                    name: item.name,
                    weight: item.weight,
                    price: item.price,
                    category: item.category,
                    qty: item.qty
                });
            }
        }

        for (i = 0; i < ctrl.desserts.length; i++) {
            var item = ctrl.desserts[i];
            if (item.qty > 0) {
                ctrl.cartItems
                .push({
                    name: item.name,
                    weight: item.weight,
                    price: item.price,
                    category: item.category,
                    qty: item.qty
                });
            }
        }

        retrieveData.set(ctrl.cartItems);
        var get = retrieveData.get();
        $location.path("checkout");
    }

    ctrl.totalQty = 0;
    ctrl.totalPrice = 0;

}

//})(angular);