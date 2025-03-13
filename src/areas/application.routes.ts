import { HomeIndexComponent } from './base/home/index/home-index-component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './base/partials/not-found/not-foundComponent';
import { InternalErrorComponent } from './base/partials/internal-error/internal-error.component';

export const routes: Routes = [
  {
    path: 'base',
    loadChildren: () =>
      import('./base/base-routing.module').then((m) => m.BaseRoutingModule),
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./hr/hr-routing.module').then((m) => m.HrRoutingModule),
  },
  { path: '', component: HomeIndexComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'internal-error', component: InternalErrorComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];
