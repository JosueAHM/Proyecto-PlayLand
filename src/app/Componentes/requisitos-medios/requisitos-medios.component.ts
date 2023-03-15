import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Requisitos } from 'src/app/interface/juegos';
import { CompraComponent } from '../compra/compra.component';
import { RequisitosModel } from 'src/app/Models/requisitos.model';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { GeneralJuegos } from 'src/app/Models/consulta_general.model';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { Router } from '@angular/router';
import { CarritoEnviarModel } from 'src/app/Models/carrito.enviar';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { JuegosService } from 'src/app/services/juegos.service';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-requisitos-medios',
  templateUrl: './requisitos-medios.component.html',
  styleUrls: ['./requisitos-medios.component.css'],
  providers: [MessageService]
})
export class RequisitosMediosComponent implements OnInit {

  constructor(
    private router: Router, 
    private _serviceJuego: JuegosService, 
    private dialog: MatDialog,
    private _serviceJuego_BE: JuegosService_BE,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
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
  validadorInicioSesion = false;

  stringModla = "";
    
  openDialogSesion() {
    this.dialog.open(CompraComponent)
  }


  validarComprar(juegoComprar:JuegosModel){
    if(localStorage.getItem('token_value') == null){
      this.validadorInicioSesion = true;
      this.stringModla = "Para poder comprar un juego el usuario debe tener iniciado la sesión.";
    }
    else{
      this._serviceJuego.setJuegosComprar(juegoComprar);
      this.openDialogSesion();
    }
  }
  validarCarrito(juegoComprar:JuegosModel){
    if(localStorage.getItem('token_value') == null){
      this.validadorInicioSesion = true;
      this.stringModla = "Para poder añadir un juego al carrito de compras el usuario debe tener la iniciado sesión.";
    }
    else{
      this.anadirCarrito(juegoComprar);
      this.desabilitarCarrito = true;
      this.showTopLeft();
      setTimeout(() => {
        this.desabilitarCarrito = false;
       }, 3000);
    }
  }

  showTopLeft() {
    this.messageService.add({key: 'tl', severity:'success', summary: 'Juego agregado al carrito con exito', detail: 'Message Content',closable:false});
  }

  desabilitarCarrito = false;

  anadirCarrito(juegoComprar:JuegosModel){
    let validador = false;
    let temporalEncioCarrito : CarritoEnviarModel = {
      idCliente : 1,
      transaccion : "BUSCAR_CARRITO"
    }
    this.carritoService.getCarrito(temporalEncioCarrito).subscribe((juego:any)=>{
      juego.Table.forEach((juegoss:any)=>{
        if(juegoss.id1==juegoComprar.id){
          validador = true;
        }
      });
      let accion = "EDITAR_CARRITO"
      if(!validador){
        accion = "AGREGAR_CARRITO"
      }
      let temporalEncioCarritos : CarritoEnviarModel = {
        idCliente : 1,
        idJuego : juegoComprar.id,
        transaccion : accion
      }
      this.carritoService.agregarCarrito(temporalEncioCarritos).subscribe();
    });

  }
  cambiarEstadoValidador(){
    this.validadorInicioSesion = !this.validadorInicioSesion;
    console.log(this.validadorInicioSesion);
  }

  irInicioSesion(){
    this.router.navigateByUrl('/paginaLogin');
  }
}
