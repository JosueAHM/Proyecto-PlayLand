import { Component, OnInit } from '@angular/core';
import { JuegosUltimosLanzamientos } from 'src/app/interface/juegos';
import { MatDialog } from '@angular/material/dialog';
import { CompraComponent } from '../../compra/compra.component';
import { JuegosService } from 'src/app/services/juegos.service';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { GeneralJuegos } from 'src/app/Models/consulta_general.model';

@Component({
  selector: 'app-pag-ultimos-lanzamientos',
  templateUrl: './pag-ultimos-lanzamientos.component.html',
  styleUrls: ['./pag-ultimos-lanzamientos.component.css']
})
export class PagUltimosLanzamientosComponent implements OnInit {

  constructor(
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
      variableEntrada : "ULTIMOS_LAZAMIENTOS",
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

  agregarJuego(juego: any) {
    console.log(juego, "agregaodo")
    console.log("uwu")
    this._serviceJuego.agregarCarrito(juego)
    //this._serviceJuego.validarExiste(juego)

  }

  openDialogSesion() {
    this.dialog.open(CompraComponent)

  }

}
