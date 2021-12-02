import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/helpers/usuario.service';
import {Usuario} from 'src/app/clase/usuario'
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.page.html',
  styleUrls: ['./alta-usuario.page.scss'],
})
export class AltaUsuarioPage implements OnInit {

  public usuario:Usuario;
  public pasa:number;
  constructor(private api:UsuarioService, private router:Router,public alertController: AlertController) {
    this.usuario = new Usuario;
    this.pasa = 0;
  }

  ngOnInit(): void {
  }

  Volver(){
    
    this.router.navigate(["/login"]);
  }
  altaUsuario(){
     
    if(this.usuario.Nombre == "" || this.usuario.Nombre == null )
    {
      this.pasa = 1;

      this.presentAlert("el campo nombre usario es obligatorio");
    }

    if(this.usuario.pass == "" || this.usuario.pass == null )
    {
      this.pasa = 1;

      this.presentAlert("el campo password usario es obligatorio");
    }

    if(this.pasa == 0){
    this.api.validarNombre(this.usuario.Nombre).subscribe(valid=>{ let validar: any = valid
       console.log(validar[0].valid);

       if(validar[0].valid == 0)
       {
        console.log(this.usuario);
          this.api.altaUsuario(this.usuario).subscribe(data=>{
          console.log(data);
          
           });
           this.presentAlert("Usuario creado");
       }
       else{
        this.presentAlert("El nomre de usuario ya existe");
       }
    
    })

    }
    this.pasa = 0;

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
