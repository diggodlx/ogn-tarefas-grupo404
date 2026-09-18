import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Et1 } from './et1/et1';
import { Et2 } from './et2/et2';
import { Et3 } from './et3/et3';

const routes: Routes = [
  {
    path: 'et1', component: Et1
  },
  {
    path: 'et2', component: Et2
  },
  {
    path: 'et3', component: Et3
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExe2RoutingModule {}
