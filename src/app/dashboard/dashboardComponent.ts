import * as angularjs from 'angular';
import './dashboardModule';
import '../appModule';

export class DashboardComponent {
  constructor(
  ) {
  }

}

angularjs.module('app').component('dashboard', {
  bindings: {
  },
  controller: DashboardComponent,
  templateUrl: './dashboardComponent.html'
});
