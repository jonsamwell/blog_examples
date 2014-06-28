(function (angular, jcs) {
    'use strict';

    angular.module(jcs.modules.pages.name).config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when(jcs.modules.pages.routes.home, {
                controller: jcs.modules.pages.controllers.default,
                templateUrl: 'js/modules/pages/html/home.tmpl.html'
            });
        }]);
}(angular, jcs));