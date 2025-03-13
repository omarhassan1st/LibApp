import { bootstrapApplication } from '@angular/platform-browser';
import { BodyComponent } from './areas/base/layout/body/body.component';
import { appConfig } from './areas/application.config';

bootstrapApplication(BodyComponent, appConfig).catch((err) =>
  console.error(err)
);
