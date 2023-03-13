import { JuegosDisponibles } from 'src/app/interface/juegos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { CompraComponent } from '../../compra/compra.component';
import { MatDialog } from '@angular/material/dialog';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { GeneralJuegos } from 'src/app/Models/consulta_general.model';

@Component({
  selector: 'app-pag-juegos-disponibles',
  templateUrl: './pag-juegos-disponibles.component.html',
  styleUrls: ['./pag-juegos-disponibles.component.Scss']
})
export class PagJuegosDisponiblesComponent implements OnInit {

  constructor(
        private router: Router, 
        private _serviceJuego: JuegosService, 
        private dialog: MatDialog,
        private _serviceJuego_BE: JuegosService_BE
  ) { }

  juegosDisponibles : JuegosModel[] = [];

  ngOnInit(): void {
    this.obtenerJuego();
  }

  obtenerJuego(){
    let temporalConsulta : GeneralJuegos = {
      variableEntrada : "JUEGOS_DISPONIBLE",
      transaccion     : "CONSULTA_JUEGOS_LANZAMIENTOS"
    }
    this._serviceJuego_BE.getJuegosLazamientos(temporalConsulta).subscribe((juegos:any)=>{
      if(juegos.Table1[0].respuesta =! "OK 200"){
        alert("Error al cargar los juegos => "+juegos.Table1[0].leyenda);
      }
      else{
        juegos.Table.forEach((juego:any) => {
          let juegoTemporal : JuegosModel = {
            id : juego.id,
            requisitos : juego.requisitos,
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
 

  traerPaginaUltimosLanzamientos() {
    this.router.navigate(['/paginaUltimosLanzamientos'])
  }

  agregarJuego(juego: any) {
    console.log(juego, "agregaodo")
    console.log("uwu")
    this._serviceJuego.agregarCarrito(juego)
    //this._serviceJuego.validarExiste(juego)

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
