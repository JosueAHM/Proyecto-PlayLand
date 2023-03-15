import { Injectable, EventEmitter, Output } from '@angular/core';
import { Juegos } from '../juegos';
import { JuegosModel } from '../Models/juegos.model';
import { CarritoModel } from '../Models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  @Output() disp: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  carrito: CarritoModel[] = []

  juegoComprar! : JuegosModel;

  setJuegosComprar(newJuego : JuegosModel){
    this.juegoComprar = newJuego;
  }

  getJuegosComprar():JuegosModel{

    return this.juegoComprar;
  }

  agregarCarrito(juegoNew: JuegosModel) {

    let validador = false;
    this.carrito.forEach(carritos=>{
      if(carritos.juego.id==juegoNew.id){
        carritos.cantidad++;
        validador = true;
      }
    })
    if(!validador){
      let carritoTemporal : CarritoModel = {
        cantidad : 1,
        juego : juegoNew
      }
      this.carrito.push(carritoTemporal);
    }
  }
}
