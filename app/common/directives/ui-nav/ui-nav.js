(function () {
    'use strict';

    angular.module('uiNav', [])
        .directive('uiNav', ['$rootScope', function ($rootScope) {
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: 'common/directives/ui-nav/ui-nav.html',
                link: function (scope, element) {
                    var navBtn = element.find('ui-icon-button'),
                        sideNav = element[0].querySelector('.side-nav'),
                        menuItems = sideNav.querySelectorAll('ul li a'),
                        mask = document.createElement('div');

                    function navToggler() {
                        sideNav.classList.toggle('open');
                        document.body.classList.toggle('side-nav-open');
                    }

                    mask.className = 'mask';
                    document.body.appendChild(mask);
                    mask.addEventListener('click', navToggler);

                    navBtn.on('click', navToggler);

                    for (var i = 0; i < menuItems.length; i += 1) {
                        menuItems[i].addEventListener('click', navToggler);
                    }

                    $rootScope.$on('$routeChangeSuccess', function (event, current) {
                        scope.pageTitle = current.title;
                    });
                }
            };
        }]);
}());
