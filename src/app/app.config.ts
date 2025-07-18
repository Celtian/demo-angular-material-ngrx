import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  isDevMode,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleStrategy, provideRouter, withViewTransitions } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultDataServiceConfig, DefaultDataServiceFactory, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAppVersion } from 'ngx-app-version';
import { provideFixedFooter } from 'ngx-fixed-footer';
import { provideTranslateVersion } from 'ngx-translate-version';
import { VERSION } from '../environments/version';
import { routes } from './app.routes';
import { entityConfig } from './entity-metadata';
import { CustomDefaultDataServiceFactory } from './shared/services/custom-default-data.service';
import { CustomErrorHandlerService } from './shared/services/custom-error-handler.service';
import { CustomTitleStrategyService } from './shared/services/custom-title-strategy.service';
import { MatPaginationIntlService } from './shared/services/mat-paginator-intl.service';

registerLocaleData(localeCs, 'cs-CS');

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com',
  timeout: 1000 * 60,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideAppVersion({
      version: VERSION.version,
    }),
    provideTranslateVersion(routes, {
      version: VERSION.version,
    }),
    provideFixedFooter({
      containerSelector: '.permanent-main',
      cssAttribute: 'margin',
    }),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, MatSnackBarModule, MatDialogModule),
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { verticalPosition: 'top', horizontalPosition: 'right' } },
    { provide: ErrorHandler, useClass: CustomErrorHandlerService },
    { provide: TitleStrategy, useClass: CustomTitleStrategyService },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    },
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig,
    },
    {
      provide: DefaultDataServiceFactory,
      useClass: CustomDefaultDataServiceFactory,
    },
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideEffects(),
    provideEntityData(entityConfig, withEffects()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
