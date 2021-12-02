import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    loadChildren: () => import('./pantallas/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'alta-producto',
    loadChildren: () => import('./pantallas/alta-producto/alta-producto.module').then( m => m.AltaProductoPageModule)
  },
  {
    path: 'edit-producto',
    loadChildren: () => import('./pantallas/edit-producto/edit-producto.module').then( m => m.EditProductoPageModule)
  },
  {
    path: 'alta-usuario',
    loadChildren: () => import('./pantallas/alta-usuario/alta-usuario.module').then( m => m.AltaUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pantallas/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
