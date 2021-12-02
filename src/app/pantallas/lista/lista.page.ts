import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clase/producto';
import { ApiService } from 'src/app/helpers/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { BuscarPipe } from 'src/app/pipe/buscar.pipe';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  productos: any;
  filtrar:any;
  pro:Producto ;
  
  constructor( private Api:ApiService,private router:Router,public alertController: AlertController) {
    
  }
  ngOnInit() {
    
    this.Api.traerConGet().subscribe(data => {
      this.productos = data;
    });
  }

  Nuevo(){

    this.router.navigate(["/alta-producto"]);
  }
  ionViewWillEnter(){
    this.Api.traerConGet().subscribe(data => {
      this.productos = data;
    });
  }
  Logout(){
    window.sessionStorage.removeItem('idangular');
    this.router.navigate(["/login"]);
  }

  async presentAlert(producto:any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Borrar',
      subHeader: '',
      message: '¿Esta seguro que desea borrar este Producto?',
      buttons: [        {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          
        }
      },         {
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          this.Baja(producto);
        }
      }, ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  Baja(producto:any)
  {

   
   console.log(producto);
   this.Api.BajaPost(producto).subscribe(data =>{
    console.log(data)
    window.location.reload();
   });

  
  }



 // Modificar(id:any,nombre:any,decripcion:any,valor:any)
  Modificar(producto:Producto)
  {
   // this.Api.productoModificar.idArticulo = id;
   // this.Api.productoModificar.Nombre = nombre;
   // this.Api.productoModificar.Descripcion = decripcion;
   // this.Api.productoModificar.Valor = valor;
   // console.log(producto);
    this.Api.productoModificar = producto;
    this.router.navigate(["/edit-producto"]);

  }

}
