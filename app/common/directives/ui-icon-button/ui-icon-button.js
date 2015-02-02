(function () {
    'use strict';

    angular.module('uiIconButton', [])
        .directive('uiIconButton', function () {
            return {
                restrict: 'AE',
                template: '<i class="fa"></i><div class="bg"></div>',
                link: function (scope, element, attr) {
                    /*
                     * get the inherited font color and we'll set the
                     * background circle color to the font color
                     */
                    var fontColor = window.getComputedStyle(element[0]).getPropertyValue('color');
                    element[0].querySelector('.bg').style.backgroundColor = fontColor;

                    element
                        .attr('role', 'button')
                        .find('i').addClass('fa-' + attr.icon);

                    if (Modernizr.touch) {
                        element.on('touchstart', function () {
                            element.addClass('tapped');
                        });

                        element.on('touchend', function () {
                            element.removeClass('tapped');
                        });
                    }
                }
            };
        });
}());
