import { Component, OnInit } from '@angular/core';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { Juegos } from 'src/app/juegos';
import { JuegosService_BE } from 'src/app/services/juegos_be.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private _serviceJuego : JuegosService_BE) { }

  juegos : JuegosModel[] = [];
  ngOnInit(): void {
    this.cargarJuegosAleatorios();
  }
  cargarJuegosAleatorios(){
    this._serviceJuego.getJuegosAleatorios().subscribe((juegos:any)=>{
      if(juegos.Table1[0].respuesta =! "OK 200"){
        alert("Error al cargar los juegos => "+juegos.Table1[0].leyenda);
      }
      else{
        juegos.Table.forEach((juego:any) => {
          let juegoTemporal : JuegosModel = {
            src             : juego.src,
          }
          this.juegos.push(juegoTemporal);
        });
       console.log(this.juegos);
      }
    });
  }

}
