import * as angularjs from 'angular';
import './app/appModule';
import './app/angular1-router.config';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UpgradeModule } from '@angular/upgrade/static';
import {setAngularLib} from '@angular/upgrade/static';

setAngularLib(angularjs);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['app'], {});
});
