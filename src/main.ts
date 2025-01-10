// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
   .catch((err) => console.error(err));
