import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria', 
    loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
  },
{
  path: 'produto',
  loadChildren: () => import('./produto/produto-module').then(m => m.ProdutoModule)
},
{
  path: 'list-exe',
  loadChildren: () => import('./list-exe/list-exe-module').then(m => m.ListExeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
