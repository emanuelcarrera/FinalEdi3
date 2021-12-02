import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Usuario } from '../clase/usuario';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private clienteHttp: HttpClient ) { }
   traerConGet(){
   return this.clienteHttp.get('https://backpracticapro.herokuapp.com/Articulo/TodosLosArticulos');
  }
  
  login(nombre : string , pass : string ){
    return this.clienteHttp.get('https://backpracticapro.herokuapp.com/Usuarios/Login/'+nombre+"/"+pass);
  }
  altaUsuario(usuario:Usuario){
    console.log(usuario);
    //return this.clienteHttp.post('http://localhost:777/Usuarios/AltaUsuarioAngular',usuario);
    return this.clienteHttp.post('https://backpracticapro.herokuapp.com/Usuarios/AltaUsuarioAngular',usuario);
  }
  validarNombre(nombre : string){

  //  return this.clienteHttp.get('http://localhost:777/Usuarios/ValidarNombre/'+nombre);
    return this.clienteHttp.get('https://backpracticapro.herokuapp.com/Usuarios/ValidarNombre/'+nombre);
  }
}
