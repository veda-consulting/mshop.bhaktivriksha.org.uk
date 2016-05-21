//(function(angular){
//'use strict'

angular
.module('PrasadApp')
.controller('placeOrder.controller', ['$scope', '$rootScope', '$location', 'retrieveData','$http','$ionicLoading', placeOrder]);



function placeOrder($scope, $rootScope, $location, retrieveData,$http,$ionicLoading) {

    var ctrl = this;
    retrieveData.get();
    ctrl.cartItems = [];
    ctrl.items = [];

    ctrl.displayLoaderLunch = false;
    ctrl.displayLoaderDinner = false;
    $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        })
    };
    $scope.hide = function () {

        if (ctrl.displayLoaderLunch == false && ctrl.displayLoaderDinner == false)
        {
            $ionicLoading.hide();
        }
        
    };
   
    ctrl.displayLoaderLunch = true;
    ctrl.displayLoaderDinner = true;

    $scope.show();
    $http({
        method: 'GET',
        url: 'http://shop.bhaktivriksha.org.uk/test/entity_commerce_product.json?parameters[type]=dinner&fields=title,sku,commerce_price',
        headers: {
            'Content-Type': 'application/json'
        }
    }).success(function(data) {
        
        
        
        var i = 0;        
        for (i = 0; i < data.length; i++)
        {
            var item = data[i];
            ctrl.items.push({
                sku: item.sku,
                name: item.title,
                price: item.commerce_price.und[0].amount/100,
                category:'dinner'
            });
        }
      
        ctrl.category = 'dinner';
        ctrl.desserts = ctrl.items.filter(filterCategory);
        ctrl.displayLoaderDinner = false;
        $scope.hide();
    }, function errorCallback(response) {
       
        ctrl.displayLoaderDinner = false;
        alert('error');
        $scope.hide();
    });
  


    $http({
        method: 'GET',
        url: 'http://shop.bhaktivriksha.org.uk/test/entity_commerce_product.json?parameters[type]=lunch&fields=title,sku,commerce_price',
        headers: {
            'Content-Type': 'application/json'
        }
    }).success(function (data) {
                ctrl.main = [];
        var i = 0;
        for (i = 0; i < data.length; i++) {
            var item = data[i];
            ctrl.main.push({
                sku: item.sku,
                name: item.title,
                price: item.commerce_price.und[0].amount / 100,
                category: 'lunch'
            });
        }
        ctrl.category = 'lunch';
        ctrl.main = ctrl.main.filter(filterCategory);
        ctrl.displayLoaderLunch = false;
      
       $scope.hide();
    }, function errorCallback(response) {

        ctrl.displayLoaderLunch = false;
        alert('error');
        $scope.hide();
    });

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
            if (item.qty > 0) {
                tot = tot + item.qty;
            }
        }
        for (i = 0; i < ctrl.desserts.length; i++) {
            var item = ctrl.desserts[i];
            if (item.qty > 0) {
                tot = tot + item.qty;
            }
        }
        ctrl.totalQty = tot;


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
        ctrl.totalPrice = totPrice;
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