import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './heroes/hero-detail.component';
import './dashboard/dashboardController';
import './dashboard/dashboardComponent';
import {DashboardComponent} from './dashboard/dashboardComponent';
// import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  { path: 'dahsboard2/component', component: DashboardComponent},
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
