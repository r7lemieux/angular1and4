import * as angularjs from 'angular';
import './app/appModule';
import './app/angular1-router.config';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { UrlService } from '@uirouter/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UpgradeModule } from '@angular/upgrade/static';
import {setAngularLib} from '@angular/upgrade/static';
import { appModule } from './app/appModule';

setAngularLib(angularjs);

if (environment.production) {
  enableProdMode();
}

// Tell UI-Router to wait to synchronize the URL (until all bootstrapping is complete)e
// appModule.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then( platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['app'], {});
});
