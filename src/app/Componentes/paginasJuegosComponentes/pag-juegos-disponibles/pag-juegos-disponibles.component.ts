import { JuegosDisponibles } from 'src/app/interface/juegos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { CompraComponent } from '../../compra/compra.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pag-juegos-disponibles',
  templateUrl: './pag-juegos-disponibles.component.html',
  styleUrls: ['./pag-juegos-disponibles.component.css']
})
export class PagJuegosDisponiblesComponent implements OnInit {

  constructor(
    private router: Router, private _serviceJuego: JuegosService, private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ArrayColecciones: string[] = ['nombre', 'descripcion', 'precio', 'fecha'];

  ArrayObjColecciones: JuegosDisponibles[] = [
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
      nombre: 'Assasins Creed Collection',
      descripcion: 'UResident Evil 7 biohazard es la siguiente gran entrega de la renombrada serie Resident Evil y supone un nuevo hito para la franquicia, puesto que se aprovecha de sus raíces y abre la puerta a una experiencia de miedo realmente terrorífica. Con su gran cambio a la vista en primera persona y un estilo fotorrealista gracias al nuevo motor de Capcom RE Engine, Resident Evil 7 trae un nivel sin precedentes de inmersión que logra una experiencia de terror muy cercana y personal. ',
      precio: 5.50,
    },
    {
      id: 3,
      src: '',
      nombre: 'Silent Hill Collection',
      descripcion: 'es un juego de rol  no tienes que matar a nadie en el que cada enemigo puede ser "derrotado" sin violencia, Baila con un limo. Acaricia a un perro. Susurra tu secreto favorito a un caballero. O ignora esta elección y haz llover destrucción sobre tus enemigos.',
      precio: 7.50,
    },
    {
      id: 4,
      src: '',
      nombre: 'GTA COLLECTION',
      descripcion: 'Cuphead es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. Fue lanzado al mercado el 29 de septiembre de 2017 para Microsoft Windows, Xbox One, Steam y PlayLand :D',
      precio: 7.80,
    },
    {
      id: 5,
      src: '',
      nombre: 'Metar Gear Solid Collection',
      descripcion: 'Hollow Knight es una desafiante aventura de acción en 2D. Explorarás cavernas retorcidas, lucharás contra criaturas contaminadas y escaparás de intrincadas trampas, todo para resolver un antiguo misterio oculto durante mucho tiempo.',
      precio: 3.75,
    },
    {
      id: 6,
      src: '',
      nombre: 'Doom Collection',
      descripcion: 'Celeste es un videojuego perteneciente al género de plataformas creado por los desarrolladores de videojuegos canadienses Maddy Thorson y Noel Berry. ',
      precio: 7.90,
    },
  ]

  traerPaginaUltimosLanzamientos() {
    this.router.navigate(['/paginaUltimosLanzamientos'])
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
