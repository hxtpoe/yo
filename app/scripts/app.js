define([
    'angular',
    'scripts/routeManager',
    'scripts/common/commonModule',
    'scripts/homepage/homepageModule',
    'angular-ui-router',
    'angular-animate',
    'angular-strap',
    'angular-strap-tpl',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource',
    'angular'
],
    /*deps*/
    function (angular, RouteManager, CommonModule, HomepageModule)/*invoke*/ {
        'use strict';

        return angular.module('YoApp', [
                CommonModule(),
                HomepageModule(),
                /*angJSDeps*/
                'ngAnimate',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router',
                'ngAnimate',
                'mgcrea.ngStrap.modal'

            ])
            .config(RouteManager)
            .config(function ($modalProvider) {
                angular.extend($modalProvider.defaults, {
                    html: true
                });
            });
    }
)
;