import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/interface/juegos';
import { MatDialog } from '@angular/material/dialog';
import { CompraComponent } from '../../compra/compra.component';
import { JuegosService } from 'src/app/services/juegos.service';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { RequisitosModel } from 'src/app/Models/requisitos.model';
import { JuegosModel } from 'src/app/Models/juegos.model';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.Scss']
})
export class DescuentosComponent  implements OnInit {
  
  constructor(
    private dialog: MatDialog, 
    private _serviceJuego: JuegosService_BE) {
  }
  //Color:boolean=true;
  juegosDescuento : any[] = [];
  ngOnInit(): void {
    this.cargarJuegos();
  }
  cargarJuegos(){
    this._serviceJuego.getJuegosDescuento().subscribe((juegos:any)=>{
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
          this.juegosDescuento.push(juegoTemporal);
        });
       console.log(this.juegosDescuento);
      }
    });
  }

  precioFinal(precio:number, descuento:number):number{
    let precioDescuento = precio*(descuento/100);
    return precio-precioDescuento;
  }

  // agregarJuego(juego: any) {
  //   console.log(juego, "agregaodo")
  //   console.log("uwu")
  //   this._serviceJuego.agregarCarrito(juego)
  //   //this._serviceJuego.validarExiste(juego)

  // }

  // openDialogSesion() {
  //   this.dialog.open(CompraComponent)

  // }
}
