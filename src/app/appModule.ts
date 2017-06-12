import 'angular';
import 'angular-route';
import * as angularjs from 'angular';
import './heroes1/heroModule';

// import uiRouter from '@uirouter/angularjs';
// import {visualizer} from "@uirouter/visualizer";

export const appModule = angularjs.module('app', ['ngRoute', 'hero'])
// export const appModule = angularjs.module('app', [uiRouter, 'ui.router.upgrade'])

// Show ui-router-visualizer
// appModule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);
