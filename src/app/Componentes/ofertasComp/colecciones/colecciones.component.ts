import { Component } from '@angular/core';
import { Colecciones } from 'src/app/interface/juegos';
import { CompraComponent } from '../../compra/compra.component';
import { MatDialog } from '@angular/material/dialog';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent {
  ArrayColecciones: string[] = ['nombre', 'descripcion', 'precio', 'descuento'];

  ArrayObjColecciones: Colecciones[] = [
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg',
      nombre: 'Fallout Clasic Colection',
      descripcion: 'Descubre dónde comenzó la legendaria serie de Fallout con los juegos que sacaron a los RPG de las mazmorras y los llevaron a Wasteland.',
      precio: 6.25,
    },
    {
      id: 2,
      src: '',
      nombre: 'Assasins Creed Ezio Collection',
      descripcion: 'Vive la vida de Ezio, aprende los modos de los asesinos y véngate por la traición de tu familia a través de la Italia renacentista del siglo XV, en Roma, y por último en la Constantinopla del siglo XVI.',
      precio: 11.90,
    },
    {
      id: 3,
      src: '',
      nombre: 'Silent Hill Collection',
      descripcion: 'Silent Hill Gold Edition Collection para PC en Español una recopilacion de la serie de terror de konami, en esta colección se incluye los titulos de silent hill del 1 al 5',
      precio: 7.50
    },
    {
      id: 4,
      src: '',
      nombre: 'Grand theft Auto IV Episodes from Liberty City',
      descripcion: 'Grand Theft Auto: Episodes From Liberty City fue el lanzamiento doble de los contenidos descargables en un solo disco: el primer episodio titulado The Lost and Damned y el segundo titulado The Ballad of Gay Tony.',
      precio: 9.75
    },
    {
      id: 5,
      src: '',
      nombre: 'Metal Gear Solid HD Collection',
      descripcion: 'Metal Gear Solid HD Collection es una colección remasterizada en HD de los videojuegos Metal Gear Solid 1, Metal Gear Solid 2: Sons of Liberty, Metal Gear Solid 3: Snake Eater ',
      precio: 3.75
    },
    {
      id: 6,
      src: '',
      nombre: 'Doom Anthology Collection',
      descripcion: 'Doom Anthology PC Full la entrega definitiva que reúne estos clásicos de disparo. Su diabólico y enfermizo sistema que tanto encanta a sus jugadores lo hace con su versión remasterizada que incluye más realismo en sus escenas satánicas.',
      precio: 7.90
    },
  ]

  constructor(private dialog: MatDialog, private _serviceJuego: JuegosService) {

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
}
