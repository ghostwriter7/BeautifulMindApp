import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { CALENDAR_NOW_TOKEN } from "@planner/tokens";
import { RequestInterceptor } from "@core/interceptors";

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: CALENDAR_NOW_TOKEN, useValue: new Date() },
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        provideRouter(routes),
        provideAnimations(),
        provideHttpClient()
    ]
};
