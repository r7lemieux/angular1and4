import * as url from 'url';
import {IStateProvider} from 'angular-ui-router';
import {IUrlRouterProvider} from 'angular-ui-router';

export class RouterConfig {
  constructor($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
      .state({
        name: 'dashboard',
        url: '/',
        templateUrl: 'angular1/dashboard/dashboard.component.html',
        controllerAs: 'vm',
        controller: 'DashboardController'
      })
      .state( {
        name: 'heroes',
        url: '/heroes',
        templateUrl: 'angular1/heroes/heroes.component.html',
        controllerAs: 'vm',
        controller: 'HeroesController'
      })
      .state({
        name: 'detail',
        url: '/detail/:id',
        templateUrl: 'angular1/detail/hero-detail.component.html',
        controllerAs: 'vm',
        controller: 'HeroDetailController'
      });

      $urlRouterProvider.otherwise('/');
  }
}

/*

 myApp.config(function($stateProvider) {
 var helloState = {
 name: 'hello',
 url: '/hello',
 template: '<h3>hello world!</h3>'
 }

 var aboutState = {
 name: 'about',
 url: '/about',
 template: '<h3>Its the UI-Router hello world app!</h3>'
 }

 $stateProvider.state(helloState);
 $stateProvider.state(aboutState);
 });
 */
