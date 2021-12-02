import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPipe } from 'src/app/pipe/buscar.pipe';
import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,

    
  ],
  declarations: [ListaPage,BuscarPipe]
})
export class ListaPageModule {}
