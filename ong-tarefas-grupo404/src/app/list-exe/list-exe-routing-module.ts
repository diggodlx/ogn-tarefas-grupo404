import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe1 } from './exe1/exe1';
import { Exe2 } from './exe2/exe2';
import { Exe3 } from './exe3/exe3';
import { Exe4 } from './exe4/exe4';
import { Exe5 } from './exe5/exe5';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExeRoutingModule {}
