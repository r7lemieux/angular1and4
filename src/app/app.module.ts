import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './angular2-router.config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule,
    UpgradeModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers   : [],
  bootstrap   : [AppComponent],
})
export class AppModule {
}
