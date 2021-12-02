import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { ApiService } from 'src/app/helpers/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.page.html',
  styleUrls: ['./alta-producto.page.scss'],
})
export class AltaProductoPage implements OnInit {

  public producto:Producto;
  public valid:number;
  constructor(private Api:ApiService, private router:Router, public alertController: AlertController) { 
    this.producto = new Producto;
    this.valid = 0;
  }

  Volver(){

    this.router.navigate(["/lista"]);
  }
  ngOnInit() {
  }
  altaProducto(){

    //this.producto.idUsuario = localStorage.getItem('idangular'); 
    this.producto.idUsuario = '21';
    if(this.producto.Nombre == null || this.producto.Nombre == "")
    {

      this.valid = 1
    }

    if(this.producto.Valor == null || this.producto.Valor == "")
    {

      this.valid = 1
    }

    if(this.producto.Descripcion == null || this.producto.Descripcion == "")
    {
      this.valid = 1
      
    }

    if(this.valid == 0){
    this.Api.AltaPost(this.producto).subscribe(data =>{

      this.presentAlert("Producto creado");
    })
    }
    else{

      this.presentAlert("Debe completar todos los campos");
      this.valid = 0;
    }

  }


  async presentAlert(Aviso:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      subHeader: '',
      message: Aviso,
      buttons: [      {
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
     
        }
      }, ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
