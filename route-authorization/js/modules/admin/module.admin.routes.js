(function (angular, jcs) {
    'use strict';

    angular.module(jcs.modules.admin.name).config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when(jcs.modules.admin.routes.users, {
                controller: jcs.modules.admin.controllers.users,
                templateUrl: 'js/modules/admin/html/users.tmpl.html',
                access: {
                    loginRequired: true,
                    permissions: ['Admin']
                }
            });
        }]);


}(angular, jcs));