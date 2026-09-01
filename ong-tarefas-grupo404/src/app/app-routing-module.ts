import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoModule } from './produto/produto-module';

const routes: Routes = [
  {
    path: 'categoria', 
    loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
  },
  {
    path: 'prooduto',
    loadChildren: () => import('./produto/produto-module').then(m => m.ProdutoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
