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
},
{
  path: 'list-exe2',
  loadChildren: () => import('./list-exe2/list-exe2-module').then(m => m.ListExe2Module)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
