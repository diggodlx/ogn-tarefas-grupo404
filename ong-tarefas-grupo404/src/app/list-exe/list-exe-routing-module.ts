import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe1 } from './exe1/exe1';
import { Exe2 } from './exe2/exe2';
import { Exe3 } from './exe3/exe3';
import { Exe4 } from './exe4/exe4';
import { Exe5 } from './exe5/exe5';
import { Exe6 } from './exe6/exe6';
import { Exe7 } from './exe7/exe7';
import { Exe8 } from './exe8/exe8';
import { Exe9 } from './exe9/exe9';
import { Exe10 } from './exe10/exe10';
 
const routes: Routes = [
  {
    path:'exe1', component: Exe1
  },
  {
    path: 'exe2', component: Exe2
  },
  
  {
    path: 'exe3', component: Exe3
  },
  {
    path: 'exe4', component: Exe4
  },
  {
    path: 'exe5', component: Exe5
  },
  {
    path: 'exe6', component: Exe6
  },
  {
    path: 'exe7', component: Exe7
  }, 
  {
    path: 'exe8', component: Exe8
  },
  {
    path: 'exe9', component: Exe9
  },
  {
    path: 'exe10', component: Exe10
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExeRoutingModule {}
