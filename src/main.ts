import { bootstrapApplication } from '@angular/platform-browser';
import { BodyComponent } from './areas/base/layout/body/body.component';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { routes } from './areas/application.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(BodyComponent, {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
