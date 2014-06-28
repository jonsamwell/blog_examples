(function (angular, jcs) {
    'use strict';

    angular.module(jcs.modules.app.name, [
        'ngRoute',
        jcs.modules.core.name,
        jcs.modules.auth.name,
        jcs.modules.admin.name,
        jcs.modules.pages.name
    ]);
}(angular, jcs));