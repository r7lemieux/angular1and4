import * as angularjs from 'angular';
import './dashboard/dashboardController';
import './dashboard/dashboardComponent';
import './appModule';

angularjs.module('app')
  .config(['$routeProvider',
    ($routeProvider: angular.route.IRouteProvider) => {
      $routeProvider
        .when('/dashboard/controller', {
          templateUrl : './dashboard/dashboardController.html',
          controllerAs: 'vm',
          controller  : 'dashboardController',
        })
        .when('/dashboard/component', {
          template: '<dashboard></dashboard>',
        })
    }]);

// angularjs.module('app')
//   .config(['$stateProvider', '$urlRouterProvider',
//     ($stateProvider, $urlRouterProvider) => {
//       $stateProvider
//         .when({
//           name        : 'dashboard',
//           url         : '/dashboard/controller',
//           templateUrl : './dashboard/dashboardController.html',
//           controllerAs: 'vm',
//           controller  : 'dashboardController',
//         })
//         .when({
//           name    : 'dashboard',
//           url     : '/dashboard/component',
//           template: '<dashboard></dashboard>',
//         })
//         .otherwise('/');
//       $urlRouterProvider.otherwise('/');
//     }]);

