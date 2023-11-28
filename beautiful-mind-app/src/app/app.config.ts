import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";
import { CALENDAR_NOW_TOKEN } from "@planner/tokens";

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: CALENDAR_NOW_TOKEN, useValue: new Date() },
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient()
  ]
};
