import './heroModule';
import './heroesService';
import {HeroesService} from './heroesService';
import {Hero} from './hero';
import { ILocationService, IScope } from 'angular';

declare let angular;

export class HeroesComponent {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(
    $scope: IScope,
    protected heroesService: HeroesService,
    protected $location: ILocationService
  ) {
    this.heroes = this.getHeroes();
  }

  getHeroes() {
    this.selectedHero = undefined;
    this.heroes = [];

    this.heroesService.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes);

    return this.heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.selectedHero };
  }

  gotoDetail() {
    this.$location.path('detail/' + this.selectedHero.id);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

angular.module('hero').component('heroes1', {
  templateUrl: './heroesComponent.html',
  bindings: {
  },
  controller: HeroesComponent,
  controllerAs: 'vm'
});


