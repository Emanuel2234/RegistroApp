import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Asistencia } from 'src/app/model/asistencia';
import { Usuario } from 'src/app/model/usuario';
import jsQR, { QRCode } from 'jsqr';

@Component({
  selector: 'app-leerqr',
  templateUrl: './leerqr.page.html',
  styleUrls: ['./leerqr.page.scss'],
})
export class LeerqrPage implements OnInit {

  @ViewChild('video') private video!: ElementRef;
  @ViewChild('canvas') private canvas!: ElementRef;

  public usuario: Usuario;
  public asistencia: Asistencia = new Asistencia();
  public escaneando = false;
  public datosQR: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    this.usuario = new Usuario();
    this.usuario.recibirUsuario(activatedRoute, router);
  }

  ngOnInit() {
  }

  public async comenzarEscaneoQR() {

  }

  async verificarVideo() {

  }

  public obtenerDatosQR(): boolean {

  }

  public mostrarDatosQROrdenados(datosQR: string): void {
    this.datosQR = datosQR;
    const objetoDatosQR = JSON.parse(datosQR);
  }

  public detenerEscaneoQR(): void {
    this.escaneando = false;
  }

  navegar(pagina: string) {
    this.usuario.navegarEnviandousuario(this.router, pagina);
  }

}
