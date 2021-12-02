import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../clase/producto';
@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  productos!:Array<Producto>
     
  
    transform(value: Array<Producto>, arg: string): any {
  
      console.log(value);
        if (arg != "" && arg != undefined) {
          this.productos  = value.filter(p=> p.Nombre.toLowerCase().includes(arg.toLowerCase()) );
          
        }
        else{
  
          this.productos =value;
        }
        ;
     
      return this.productos;
    }
}
