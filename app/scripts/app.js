//'use strict';
//
//angular
//  .module('teamTmntApp', [
//    'ngCookies',
//    'ngResource',
//    'ngSanitize'
//  ]);


'use strict';

angular.module('teamTmntApp', [
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
        .state('team', {
            url: '/team/:teamId',
            templateUrl: 'views/team.html',
            controller: 'TeamCtrl',
//            resolve: {
//                team: function (TurtleService, $stateParams) {
//                    return TurtleService.getTeam($stateParams.teamId);
//                }
            }
        });

});