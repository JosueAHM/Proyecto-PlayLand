import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { RequisitosModel } from 'src/app/Models/requisitos.model';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CarritoService } from 'src/app/services/carrito.service';
import { CarritoEnviarModel } from 'src/app/Models/carrito.enviar';
import { CompraComponent } from '../../compra/compra.component';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css'],
  providers: [MessageService]

})
export class ColeccionesComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private _serviceJuego: JuegosService, 
    private dialog: MatDialog,
    private _serviceJuego_BE: JuegosService_BE,
    private messageService: MessageService, 
    private primengConfig: PrimeNGConfig,
    private carritoService: CarritoService) {
  }
  //Color:boolean=true;
  juegosDescuento : any[] = [];
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.cargarJuegos();
  }
  cargarJuegos(){
    this._serviceJuego_BE.getJuegosColeccion().subscribe((juegos:any)=>{
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
      idCliente :  Number(localStorage.getItem('idCliente')),
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
        idCliente : Number(localStorage.getItem('idCliente')),
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