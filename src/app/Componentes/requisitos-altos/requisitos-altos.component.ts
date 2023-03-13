import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Requisitos } from 'src/app/interface/juegos';
import { CompraComponent } from '../compra/compra.component';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { GeneralJuegos } from 'src/app/Models/consulta_general.model';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { RequisitosModel } from 'src/app/Models/requisitos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisitos-altos',
  templateUrl: './requisitos-altos.component.html',
  styleUrls: ['./requisitos-altos.component.css']
})
export class RequisitosAltosComponent implements OnInit {

  constructor(
    private router : Router,
    private dialog: MatDialog,
    private _serviceJuego_BE: JuegosService_BE
  ) {}

  ngOnInit(): void {
    this.obtenerJuego();
  }

  juegosDisponibles : any[] = [];

  obtenerJuego(){
    let temporalConsulta : GeneralJuegos = {
      variableEntrada : "ALTOS",
      transaccion     : "CONSULTA_JUEGOS_REQUISITOS"
    }
    this._serviceJuego_BE.getJuegosLazamientos(temporalConsulta).subscribe((juegos:any)=>{
      if(juegos.Table1[0].respuesta =! "OK 200"){
        alert("Error al cargar los juegos => "+juegos.Table1[0].leyenda);
      }
      else{
        juegos.Table.forEach((juego:any) => {

          let requisitosTemporal : RequisitosModel = {
            sistema: juego.sistema,
            procesador: juego.procesador,
            memoria: juego.memoria,
            graficos: juego.graficos,
            directx: juego.directx,
            almacenamiento: juego.almacenamiento,
            tipoRequisitos: juego.tipoRequisitos,
            id: null,
            estado: null
          }

          let juegoTemporal : JuegosModel = {
            id : juego.id,
            requisitos : requisitosTemporal,
            src : juego.src,
            nombre : juego.nombre,
            descripcion : juego.descripcion,
            precio : juego.precio,
            fechaLazamiento : juego.fechaLazamiento,
            descuento : juego.descuento,
            estado : juego.estado,
          }
          this.juegosDisponibles.push(juegoTemporal);
        });
       console.log(this.juegosDisponibles);
      }
    });
  }


  openDialogSesion() {
    this.dialog.open(CompraComponent)
  }

  validadorInicioSesion = false;

  stringModla = "";

  validarComprar(){
    if(localStorage.getItem('token_value') == null){
      this.validadorInicioSesion = true;
      this.stringModla = "Para poder comprar un juego el usuario debe tener iniciado la sesión.";
    }
  }
  validarCarrito(){
    if(localStorage.getItem('token_value') == null){
      this.validadorInicioSesion = true;
      this.stringModla = "Para poder añadir un juego al carrito de compras el usuario debe tener la iniciado sesión.";
    }
  }

  cambiarEstadoValidador(){
    this.validadorInicioSesion = !this.validadorInicioSesion;
    console.log(this.validadorInicioSesion);
  }

  irInicioSesion(){
    this.router.navigateByUrl('/paginaLogin');
  }

}
