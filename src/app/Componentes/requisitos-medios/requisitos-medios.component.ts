import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Requisitos } from 'src/app/interface/juegos';
import { CompraComponent } from '../compra/compra.component';
import { RequisitosModel } from 'src/app/Models/requisitos.model';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { GeneralJuegos } from 'src/app/Models/consulta_general.model';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';


@Component({
  selector: 'app-requisitos-medios',
  templateUrl: './requisitos-medios.component.html',
  styleUrls: ['./requisitos-medios.component.css']
})
export class RequisitosMediosComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _serviceJuego_BE: JuegosService_BE
  ) {}

  ngOnInit(): void {
    this.obtenerJuego();
  }

  juegosDisponibles : any[] = [];

  obtenerJuego(){
    let temporalConsulta : GeneralJuegos = {
      variableEntrada : "MEDIOS",
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
}
