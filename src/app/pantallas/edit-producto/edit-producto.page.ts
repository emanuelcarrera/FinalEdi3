import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/helpers/api.service'; 
import { from } from 'rxjs';
import { Producto } from 'src/app/clase/producto';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.page.html',
  styleUrls: ['./edit-producto.page.scss'],
})
export class EditProductoPage implements OnInit {

  constructor(private Api:ApiService, private router:Router,public alertController: AlertController) { }
  producto!: Producto;
  ngOnInit(): void {
    this.producto = this.Api.productoModificar;
    console.log(this.producto);
  }
  Volver(){
    
    this.router.navigate(["/lista"]);
  }
  Guardar(pro:Producto)
  {
     console.log(this.producto);
     this.Api.EditarPost(this.producto).subscribe(data =>{  
      this.presentAlert("Modificacion correcta");
       console.log(data);
    })
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
