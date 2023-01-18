import { Component } from '@angular/core';
import { Juegos } from 'src/app/interface/juegos';
@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent {
  ArrayJuegos: string [] = ['nombre','descripcion','precio','descuento'];

  ArrayObjJuegos: Juegos[] = [
    {
      id: 1,
      src:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg',
      nombre: 'Dark Souls',
      descripcion: 'Dark Souls es una serie de juegos de rol de acción creados por Hidetaka Miyazaki de FromSoftware y publicados por Bandai Namco Entertainment. La serie comenzó con el lanzamiento de Dark Souls.',
      precio: 10.25,
      descuento: '50%',
    },
    {
      id: 2,
      src: '',
      nombre: 'Undertale',
      descripcion: 'Undertale es un videojuego de rol en 2D de 2015 creado por el desarrollador independiente estadounidense Toby Fox. ',
      precio: 1.25,
      descuento: '70%',
    }
  ]
}
