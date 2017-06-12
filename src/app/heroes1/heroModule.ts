import 'angular';
import 'angular-route';
import * as angularjs from 'angular';

export const heroModule = angularjs.module('hero', ['ngRoute'])
         // .config([
         //   <any>'$routeProvider',
         //   ($routeProvider: ) => {
         //     $routeProvider
         //       .when({
         //         name        : 'dashboard',
         //         url         : '/dashboard',
         //         templateUrl : '../dashboard/dashboard.component.html',
         //         controllerAs: 'vm',
         //         controller  : 'DashboardController',
         //       })
               // .when({
               //   name        : 'heroes',
               //   url         : '/heroes',
               //   templateUrl : 'angular1/heroes/heroes.component.html',
               //   controllerAs: 'vm',
               //   controller  : 'HeroesController',
               // })
               // .when({
               //   name        : 'detail',
               //   url         : '/detail/:id',
               //   templateUrl : 'angular1/detail/hero-detail.component.html',
               //   controllerAs: 'vm',
               //   controller  : 'HeroDetailController',
               // })
               // .otherwise('/');
// $urlRouterProvider.otherwise('/');
//            }
//          ])
;

// module.exports.heroModule = heroModule;
