import * as angularjs from 'angular';
import './dashboardModule';
import '../appModule';

export class DashboardController {
  constructor() {
  }

}

angularjs.module('app').controller('dashboardController', DashboardController);

