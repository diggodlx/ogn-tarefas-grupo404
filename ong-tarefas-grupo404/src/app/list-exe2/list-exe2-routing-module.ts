import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Et1 } from './et1/et1';
import { Et2 } from './et2/et2';
import { Et3 } from './et3/et3';
import { Et4 } from './et4/et4';
import { Et5 } from './et5/et5';
import { Et6 } from './et6/et6';
import { Et7 } from './et7/et7';
import { Et8 } from './et8/et8';
import { Et9 } from './et9/et9';
import { Et10 } from './et10/et10';
import { Et11 } from './et11/et11';
import { Et12 } from './et12/et12';
import { Et13 } from './et13/et13';
import { Df } from './df/df';


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
  },
  {
    path: 'et7', component: Et7
  },
  {
    path: 'et8', component: Et8
  },
  {
    path: 'et9', component: Et9
  },
  {
    path:'et10', component: Et10
  },
  {
    path:'et11', component: Et11
  },
  {
    path:'et12', component: Et12
  },
  {
    path:'et13', component: Et13
  },
  {
    path: 'df', component: Df
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExe2RoutingModule {}
