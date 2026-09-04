import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exe1 } from './exe1/exe1';
import { Exe2 } from './exe2/exe2';

const routes: Routes = [
  {
    path:'exe1', component: Exe1
  },
  {
    path: 'exe2', component: Exe2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExeRoutingModule {}
