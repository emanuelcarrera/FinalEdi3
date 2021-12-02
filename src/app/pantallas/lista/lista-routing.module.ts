import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPage } from './lista.page';
import { BuscarPipe } from 'src/app/pipe/buscar.pipe';
const routes: Routes = [
  {
    path: '',
    component: ListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPageRoutingModule {}
