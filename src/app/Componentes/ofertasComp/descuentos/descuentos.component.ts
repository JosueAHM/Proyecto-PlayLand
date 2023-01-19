import { Component } from '@angular/core';
import { Juegos } from 'src/app/interface/juegos';
import { MatDialog } from '@angular/material/dialog';
import { CompraComponent } from '../../compra/compra.component';

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
      nombre: 'Resident Evil VII',
      descripcion: 'Resident Evil 7 biohazard es la siguiente gran entrega de la renombrada serie Resident Evil y supone un nuevo hito para la franquicia, puesto que se aprovecha de sus raíces y abre la puerta a una experiencia de miedo realmente terrorífica. Con su gran cambio a la vista en primera persona y un estilo fotorrealista gracias al nuevo motor de Capcom RE Engine, Resident Evil 7 trae un nivel sin precedentes de inmersión que logra una experiencia de terror muy cercana y personal. ',
      precio: 5.50,
      descuento: '75%',
    },
    {
      id: 3,
      src: '',
      nombre: 'Undertale',
      descripcion: 'Es un juego de rol  no tienes que matar a nadie en el que cada enemigo puede ser derrotado sin violencia, Baila con un limo. Acaricia a un perro. Susurra tu secreto favorito a un caballero. O ignora esta elección y haz llover destrucción sobre tus enemigos.',
      precio: 7.50,
      descuento: '25%',
    },
    {
      id: 4,
      src: '',
      nombre: 'Cuphead',
      descripcion: 'Cuphead es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. Fue lanzado al mercado el 29 de septiembre de 2017 para Microsoft Windows, Xbox One, Steam y PlayLand :D',
      precio: 7.80,
      descuento: '60%',
    },
    {
      id: 5,
      src: '',
      nombre: 'Hollow Knight',
      descripcion: 'Hollow Knight es una desafiante aventura de acción en 2D. Explorarás cavernas retorcidas, lucharás contra criaturas contaminadas y escaparás de intrincadas trampas, todo para resolver un antiguo misterio oculto durante mucho tiempo.',
      precio: 3.75,
      descuento: '75%',
    },
    {
      id: 6,
      src: '',
      nombre: 'Celeste',
      descripcion: 'Celeste es un videojuego perteneciente al género de plataformas creado por los desarrolladores de videojuegos canadienses Maddy Thorson y Noel Berry. ',
      precio: 7.90,
      descuento: '60%',
    },
    {
      id: 7,
      src: '',
      nombre: 'Stardew Valley',
      descripcion: 'Stardew Valley es un videojuego indie de simulación de granja desarrollado por Eric "ConcernedApe" Barone y publicado por Chucklefish Games. El juego se lanzó en primer lugar para Windows el 26 de febrero de 2016. Pudiendo disfrutarlo desde Playland :D',
      precio: 7.5,
      descuento: '50%',
    },
    {
      id: 8,
      src: '',
      nombre: 'Sonic Mania',
      descripcion: 'Un homenaje definitivo al pasado y al futuro. Una nueva aventura repleta de jefes únicos, paisajes rodantes en 2D y las mecánicas más clásicas y divertidas. Sonic Mania lleva al futuro la acción vertiginosa de los juegos de plataformas retro con gráficos en 2D de pixelado perfecto a 60 fps.',
      precio: 12.50,
      descuento: '25%',
    },
    {
      id: 9,
      src: '',
      nombre: 'Whatch Dogs',
      descripcion: 'Watch Dogs es una franquicia de videojuegos de acción y aventura publicada por Ubisoft y desarrollada principalmente por sus estudios de Montreal y Toronto utilizando el motor de juego Disrupt.​',
      precio: 9.99,
      descuento: '60%',
    },
  ]

  constructor(private dialog:MatDialog){

  }

  openDialogSesion(){
    this.dialog.open(CompraComponent)
  }
}
