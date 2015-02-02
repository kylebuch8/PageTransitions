(function () {
    'use strict';

    /*global angular*/
    angular.module('pageTransitions', [
        'ngRoute',
        'ngAnimate',
        'uiNav',
        'uiIconButton'
    ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController',
                    title: 'Home'
                })
                .when('/contact', {
                    templateUrl: 'components/contact/contact.html',
                    controller: 'ContactController',
                    title: 'Contact'
                });
        }])

        .controller('HomeController', ['$rootScope', function ($rootScope) {
            $rootScope.pageClass = 'page-home';
        }])

        .controller('ContactController', ['$rootScope', function ($rootScope) {
            $rootScope.pageClass = 'page-contact';
        }]);

    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
}());
