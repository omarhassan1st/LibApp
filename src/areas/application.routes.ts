import { HomeIndexComponent } from './base/home/index/home-index-component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './base/partials/not-found/not-foundComponent';
import { AboutComponent } from './base/home/about/about.component';
import { InternalErrorComponent } from './base/partials/internal-error/internal-error.component';

export const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  {
    path: 'base',
    children: [
      { path: 'home/index', component: HomeIndexComponent },
      { path: 'home/about', component: AboutComponent },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'internal-error', component: InternalErrorComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];
