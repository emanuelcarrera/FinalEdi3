import { Injectable } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Usuario } from '../clase/usuario';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private clienteHttp: HttpClient) { }
    traerConGet(){
      return this.clienteHttp.get('https://backpracticapro.herokuapp.com/Articulo/TodosLosArticulos');

     } 

     AltaPost(Producto:Producto){
      console.log(Producto);
     return this.clienteHttp.post('https://backpracticapro.herokuapp.com/Articulo/AltaAngular', Producto);
    }
  
    BajaPost(Producto:Producto){

      console.log(Producto);
      return this.clienteHttp.get('https://backpracticapro.herokuapp.com/Articulo/BajaAngular/'+Producto);

    }
  
    EditarPost(Producto:Producto){
  
      return this.clienteHttp.post('https://backpracticapro.herokuapp.com/Articulo/EditAngular', Producto);
    }
  
    productoModificar!: Producto;

  
}
