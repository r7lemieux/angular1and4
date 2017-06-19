import * as angularjs from 'angular';
import './app/appModule';
import './app/angular1-router.config';

import { enableProdMode, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouter, UrlService } from '@uirouter/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UpgradeModule } from '@angular/upgrade/static';
import { setAngularLib } from '@angular/upgrade/static';
import { appModule } from './app/appModule';
import {visualizer} from '@uirouter/visualizer';

setAngularLib(angularjs);

if (environment.production) {
  enableProdMode();
}

// Tell UI-Router to wait to synchronize the URL (until all bootstrapping is complete)e
appModule.config(['$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept()]);

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    const injector: Injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['app'], {});
    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    const url: UrlService = injector.get(UIRouter).urlService;

    // Instruct UIRouter to listen to URL changes
    url.listen();
    url.sync();
  });

// Show ui-router-visualizer
appModule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);
