import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { RequisitosModel } from 'src/app/Models/requisitos.model';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {
  
  constructor(
    private router : Router,
    private dialog: MatDialog, 
    private _serviceJuego: JuegosService_BE) {
  }
  //Color:boolean=true;
  juegosDescuento : any[] = [];
  ngOnInit(): void {
    this.cargarJuegos();
  }
  cargarJuegos(){
    this._serviceJuego.getJuegosColeccion().subscribe((juegos:any)=>{
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