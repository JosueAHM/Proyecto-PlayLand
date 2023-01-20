import { Injectable, EventEmitter, Output } from '@angular/core';
import { Juegos } from '../juegos';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  @Output() disp: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  carrito: Juegos[] = []

  agregarCarrito(juego: Juegos) {

    this.carrito.push(juego)
  }
}
