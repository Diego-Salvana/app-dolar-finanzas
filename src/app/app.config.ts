import { ApplicationConfig, LOCALE_ID, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAR, 'es-AR');

export const appConfig: ApplicationConfig = {
   providers: [
      provideExperimentalZonelessChangeDetection(),
      provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
      provideClientHydration(),
      provideHttpClient(withFetch()),
      provideAnimationsAsync(),
      { provide: LOCALE_ID, useValue: 'es-AR' }
   ]
};
