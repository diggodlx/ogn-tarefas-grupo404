import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Et1 } from './et1/et1';
import { Et2 } from './et2/et2';

const routes: Routes = [
  {
    path: 'et1', component: Et1
  },
  {
    path: 'et2', component: Et2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExe2RoutingModule {}
