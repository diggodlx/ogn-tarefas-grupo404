import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Et1 } from './et1/et1';
import { Et2 } from './et2/et2';
import { Et3 } from './et3/et3';
import { Et4 } from './et4/et4';
import { Et5 } from './et5/et5';
import { Et6 } from './et6/et6';

const routes: Routes = [
  {
    path: 'et1', component: Et1
  },
  {
    path: 'et2', component: Et2
  },
  {
    path: 'et3', component: Et3
  },
  {
    path: 'et4', component: Et4
  },
  {
    path: 'et5', component: Et5
  },
  {
    path: 'et6', component: Et6
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExe2RoutingModule {}
