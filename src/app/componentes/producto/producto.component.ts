import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clase/producto';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/helpers/api.service'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  @Input() producto!:Producto;

 
  constructor(private Api:ApiService, private router:Router,) { 
    
  }


  ngOnInit(): void {
  }
  Baja()
  {


    console.log(this.producto);
    this.Api.BajaPost(this.producto).subscribe(data =>{

      window.location.reload();
    });

  
  }

  Modificar()
  {
    console.log(this.producto );
    this.Api.productoModificar = this.producto;
    this.router.navigate(["/Edit"]);

  }

}
