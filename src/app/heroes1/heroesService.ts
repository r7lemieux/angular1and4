import './heroModule';
import {heroModule} from './heroModule';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import * as angularjs from 'angular';

export class HeroesService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    return Promise.resolve(HEROES)
      .then((heroes: Hero[]) => { return heroes.filter((h) => {
        return h.id === id;
      })[0]});
  }
}

heroModule.service('heroesService', HeroesService)
