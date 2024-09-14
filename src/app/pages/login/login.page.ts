import { Component, OnInit,  } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario : Usuario;

  constructor(
    private toastController : ToastController,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { 
    this.usuario = new Usuario('','','','','','','',
      NivelEducacional.findNivelEducacionalById(1)!,undefined);//indica que el 1 existe
    this.usuario.cuenta = 'atorres';
    this.usuario.password ='1234';
  }

  ngOnInit() {
    
  }

  public ingresar(): void {
    if (this.usuario) {
      if (!this.ValidarUsuario(this.usuario)) return;
      const usu: Usuario | undefined = this.usuario.buscarUsuarioValido(
        this.usuario.cuenta, this.usuario.password
      );
      if (usu){
        const extras: NavigationExtras ={
          state:{
            usuario: usu
          }
        } 
        this.mostrarMensaje('Buenos dias :P');
        this.router.navigate(['/inicio'], extras);
      }
    }
  }

  public ValidarUsuario(usuario: Usuario): boolean{
    const mensajeError = usuario.validarUsuario();
    if (mensajeError){
      this.mostrarMensaje(mensajeError);
      return false;
    }
    return true;
  }

  async mostrarMensaje(mensaje: string,duracion?: number){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion? duracion :2000
    });
    toast.present();
  }

}
