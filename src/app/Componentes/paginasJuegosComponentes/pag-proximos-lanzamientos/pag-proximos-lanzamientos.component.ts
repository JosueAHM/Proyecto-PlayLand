import { Component, OnInit } from '@angular/core';
import { JuegosProximosLanzamientos } from 'src/app/interface/juegos';
import { JuegosService } from 'src/app/services/juegos.service';
import { CompraComponent } from '../../compra/compra.component';
import { MatDialog } from '@angular/material/dialog';
import { GeneralJuegos } from 'src/app/Models/consulta_general.model';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CarritoService } from 'src/app/services/carrito.service';
import { CarritoEnviarModel } from 'src/app/Models/carrito.enviar';

@Component({
  selector: 'app-pag-proximos-lanzamientos',
  templateUrl: './pag-proximos-lanzamientos.component.html',
  styleUrls: ['./pag-proximos-lanzamientos.component.css'],
  providers: [MessageService]
})
export class PagProximosLanzamientosComponent implements OnInit {

  constructor(
    private router: Router, 
    private _serviceJuego: JuegosService, 
    private dialog: MatDialog,
    private _serviceJuego_BE: JuegosService_BE,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private carritoService: CarritoService) 
  { }

  juegosDisponibles : JuegosModel[] = [];

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.obtenerJuego();
  }

  obtenerJuego(){
    let temporalConsulta : GeneralJuegos = {
      variableEntrada : "PROXIMOS_LAZAMIENTOS",
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

  validadorInicioSesion = false;

  stringModla = "";

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
