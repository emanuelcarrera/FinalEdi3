import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarPipe } from './pipe/buscar.pipe';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
   
    
    
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
