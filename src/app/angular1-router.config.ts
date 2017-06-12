import * as angularjs from 'angular';
import './dashboard/dashboardController';
import './dashboard/dashboardComponent';
import './heroes1/heroesComponent';
import './appModule';
import './heroes1/heroModule';

angularjs.module('app')
  .config(['$routeProvider',
    ($routeProvider: angular.route.IRouteProvider) => {
      $routeProvider
        .when('/dashboard1/controller', {
          templateUrl : './dashboard/dashboardController.html',
          controllerAs: 'vm',
          controller  : 'dashboardController',
        })
        .when('/dashboard1/component', {
          template: '<dashboard></dashboard>',
        })
        .when('/heroes1', {
          template: '<heroes1>Where is heroe1Component?</heroes1>',
        })
    }]);

// angularjs.module('app')
//   .config(['$stateProvider', '$urlRouterProvider',
//     ($stateProvider, $urlRouterProvider) => {
//       $stateProvider
//         .state({
//           name        : 'dashboardController',
//           url         : '/dashboard/controller',
//           templateUrl : './dashboard/dashboardController.html',
//           controllerAs: 'vm',
//           controller  : 'dashboardController',
//         })
//         .state({
//           name    : 'dashboardComponent',
//           url     : '/dashboard/component',
//           template: '<dashboard></dashboard>',
//         });
//       $urlRouterProvider.otherwise('/');
//     }]);

