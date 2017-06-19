import * as angularjs from 'angular';
import './dashboard1/dashboardController';
import './dashboard1/dashboardComponent';
import './heroes1/heroesComponent';
import './heroes1/heroDetailComponent';
import './appModule';
import './heroes1/heroModule';
// import 'angular-ui-router';

// angularjs.module('app')
//   .config(['$routeProvider',
//     ($routeProvider: angular.route.IRouteProvider) => {
//       $routeProvider
//         .when('/dashboard1/controller', {
//           templateUrl : './dashboard1/dashboardController.html',
//           controllerAs: 'vm',
//           controller  : 'dashboardController',
//         })
//         .when('/dashboard1/component', {
//           template: '<div><dashboard></dashboard></div>',
//         })
//         .when('/heroes1', {
//           template: '<heroes1>Where is heroe1Component?</heroes1>',
//         })
//         .when('/detail/:id', {
//           templateUrl: 'heroes1/heroDetailComponent.html',
//           controllerAs: 'vm',
//           controller: 'HeroDetailController'
//         })
//     }]);

angularjs.module('app')
  .config(['$stateProvider', '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state({
          name        : 'dashboardController',
          url         : '/dashboard/controller',
          templateUrl : './dashboard1/dashboardController.html',
          controllerAs: 'vm',
          controller  : 'dashboardController',
        })
        .state({
          name    : 'dashboardComponent',
          url     : '/dashboard/component',
          template: '<dashboard1></dashboard1>',
        })
        .state({
          name    : 'heroesComponent',
          url     : '/heroes1',
          template: '<heroes1></heroes1>',
        })
        .state({
          name    : 'home',
          url     : '/',
          template: '<dashboard1></dashboard1>',
        });
      $urlRouterProvider.otherwise('/');
    }]);

