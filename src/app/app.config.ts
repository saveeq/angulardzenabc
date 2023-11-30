import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {AppComponent} from "./app.component";
import {CategoriesComponent} from "./views/categories/categories.component";

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
