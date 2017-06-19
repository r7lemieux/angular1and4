import 'angular';
// import 'angular-route';
import * as angularjs from 'angular';
import './heroes1/heroModule';

import '@uirouter/angular-hybrid';
import uiRouter from '@uirouter/angularjs';
import { upgradeModule } from '@uirouter/angular-hybrid';


// export const appModule = angularjs.module('app', ['ngRoute', 'hero'])
export const appModule = angularjs.module('app', [
  uiRouter,
  upgradeModule.name,
  ])

// Show ui-router-visualizer
// appModule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);
