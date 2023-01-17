import { Component, OnInit } from '@angular/core';
import { Juegos } from 'src/app/interface/juegos';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  
  juegos: Juegos={
      id: 1,
      nombre: "Undertale",
      descripcion: "Undertale es un videojuego de rol en 2D de 2015 creado por el desarrollador independiente estadounidense Toby Fox. ",
      precio: 1.25,
      descuento: "70%",
    };

  constructor(){

  }

  ngOnInit(): void {
      
  }
}
