(function (angular, jcs) {
    'use strict';

    angular.module(jcs.modules.auth.name).run([
        '$rootScope',
        '$location',
        jcs.modules.auth.services.authorization,
        function ($rootScope, $location, authorization) {
            $rootScope.$on('$routeChangeStart', function (event, next) {
                var authorised;
                if (next.$$route !== undefined && next.$$route.access !== undefined) {
                    authorised = authorization.authorize(next.access.loginRequired, next.access.permissions, next.access.permissionCheckType);
                    if (authorised === jcs.modules.auth.enums.authorised.loginRequired) {
                        $location.path(jcs.modules.auth.routes.login);
                    } else if (authorised === jcs.modules.auth.enums.authorised.notAuthorised) {
                        $location.path(jcs.modules.auth.routes.notAuthorised).replace();
                    }
                }
            });
        }]);


}(angular, jcs));