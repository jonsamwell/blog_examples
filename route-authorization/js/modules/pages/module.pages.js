(function (angular, jcs) {
    'use strict';

    jcs.modules.pages = {
        name: 'pages',
        controllers: {
            default: 'defaultCtrl'
        },
        routes: {
            home: '/home'
        }
    };

    angular.module(jcs.modules.pages.name, [
        'ngRoute'
    ]);
}(angular, jcs));
