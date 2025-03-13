import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesIndexComponent } from './employees/index/employees-index.component';
import { EmployeesCreateComponent } from './employees/create/employees-create.component';

const routes: Routes = [
  { path: 'employees/index', component: EmployeesIndexComponent },
  { path: 'employees/create', component: EmployeesCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
