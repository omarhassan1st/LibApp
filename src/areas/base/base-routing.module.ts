import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './home/index/home-index-component';
import { AboutComponent } from './home/about/about.component';

const routes: Routes = [
  { path: 'home/index', component: HomeIndexComponent },
  { path: 'home/about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule { }
