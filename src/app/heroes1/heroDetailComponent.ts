import { Hero } from './hero';
import { HeroesService } from './heroesService';
import * as angular from 'angular';

interface HeroDetailRouteParams { //extends ng.route.IRouteParamsService {
  id: string;
}

export class HeroDetailComponent {
  public hero: Hero;

  constructor($scope: ng.IScope,
              private HeroService: HeroesService,
              private $routeParams: HeroDetailRouteParams,
              private $location: ng.ILocationService) {
    if (!this.hero) {
      const id = +this.$routeParams.id;
      this.HeroService.getHero(id).then((hero: Hero) => this.hero = hero);
    }
  }

  gotoHeroes() {
    this.$location.path('heroes');
  }
}
angular.module('hero').component('heroes1', {
  templateUrl: './heroesComponent.html',
  bindings: {
  },
  controller: HeroDetailComponent,
  controllerAs: 'vm'
});
