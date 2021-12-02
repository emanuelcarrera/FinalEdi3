import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/helpers/usuario.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pass:string;
  nombreU:string;
  

  
 constructor(private Api:UsuarioService, private router:Router,public alertController: AlertController) { 
   
   this.pass = "";
   this.nombreU = "";
 }

 ngOnInit(): void {
 }

 Registrarse(){
    
   this.router.navigate(["/alta-usuario"]);
 }
 login(){
  

  this.Api.login(this.nombreU,this.pass).subscribe(data => { let usuario : any = data ; 
   console.log(usuario[0]);
   if( usuario[0] != undefined ){
     window.sessionStorage.setItem('idangular',usuario[0].idUsuario);
     this.router.navigate(["/lista"]);

   }else{
     this.presentAlert("usuario o contraseña incorrectos");
   }   });
   
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
