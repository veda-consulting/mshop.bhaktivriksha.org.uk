//(function(){
//'use strict';
var module = angular.module('PrasadApp', ['ui.router', 'ionic'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.template.html'
        })
        .state('order', {
            url: '/order',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: 'app/order/placeOrder.template.html',
            controller: 'placeOrder.controller',
            controllerAs: 'ctrl',
            scope: true
        })
        .state('login', {
            url: '/login',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: 'app/login/login.template.html',
            controller: 'login.controller',
            controllerAs: 'ctrl',
            scope: true
        })
        .state('checkoutContinue', {
            url: '/checkoutContinue',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: 'app/checkout/checkoutContinue.template.html',
            controller: 'checkoutContinue.controller',
            controllerAs: 'ctrl',
            scope: true
        })
        .state('payment', {
            url: '/payment',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: 'app/payment/payment.template.html',
            controller: 'payment.controller',
            controllerAs: 'ctrl',
            scope: true
        })
        .state('confirmation', {
            url: '/confirmation',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: 'app/confirmation/confirmation.template.html',
            controller: 'confirmation.controller',
            controllerAs: 'ctrl',
            scope: true
        })
        .state('orderConfirmed', {
            url: '/orderConfirmed',
            //template: '<div class="padding"><h2>Order</h2><button class="button button-assertive" ui-sref="home">To home</button></div>'
            templateUrl: 'app/confirmation/orderConfirmed.template.html',
            controller: 'orderConfirmed.controller',
            controllerAs: 'ctrl',
            scope: true
        })


        .state('checkout', {
            url: '/checkout',
            templateUrl: 'app/checkout/checkout.template.html',
            controller: 'checkout.controller',
            controllerAs: 'ctrl',
            scope: true
        })
    $urlRouterProvider.otherwise('/home');

});

//angular.module('HelloApp', ['PrasadApp']);

//})


module.service('retrieveData', function () {
    this.savedData = {};
    this.isGuestUser = false;
    this.set = function (data) {
        this.savedData = data;
    }
    this.get = function () {
        return this.savedData;
    }

    this.setAsGuestUser = function () {
        this.isGuestUser = true;
    };

    this.setAsLoggedInUser = function () {
        this.isGuestUser = false;
    };

    this.isUserAGuestUser = function () {
        return this.isGuestUser;
    };

    this.getUserData = function () {
        return this.userData;
    };

    this.setUserData = function (user) {
        this.userData = user;
    };
});


module.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});