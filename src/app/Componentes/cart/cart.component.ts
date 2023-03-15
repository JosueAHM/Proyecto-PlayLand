import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';




import { Juegos } from 'src/app/juegos';
import { JuegosService } from 'src/app/services/juegos.service';
import { Dialog } from '@angular/cdk/dialog';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { CarritoModel } from 'src/app/Models/carrito.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { CarritoEnviarModel } from 'src/app/Models/carrito.enviar';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  carrito: CarritoModel[] = []
  constructor(private _servicesJuegos:JuegosService, private _juegoBE : CarritoService, private ruta:Router){

  }


  llenarServicio(){
    let temporalEncioCarrito : CarritoEnviarModel = {
      idCliente :  Number(localStorage.getItem('idCliente')),
      transaccion : "BUSCAR_CARRITO"
    }
    this._juegoBE.getCarrito(temporalEncioCarrito).subscribe((juego:any)=>{
      if(juego.Table1[0].respuesta =! "OK 200"){
        alert("Error al cargar los juegos => "+juego.Table1[0].leyenda);
      }
      let temporalCarritoService : CarritoModel[]=[]
      juego.Table.forEach((juegos:any) => {
        let temporalJuego : JuegosModel = {
          nombre : juegos.nombre,
          precio : juegos.precio,
          id : juegos.id1
        }
        let temporalCarro : CarritoModel = {
          cantidad : juegos.cantidad,
          juego : temporalJuego
        }
        temporalCarritoService.push(temporalCarro);
        
      });
      this.carrito  = temporalCarritoService;
     
    },(error:any)=>{
      alert("Usuario no inicio sesión");
      this.ruta.navigateByUrl('/paginaPrincipal');
    });
  }
  ngOnInit(): void {
    this.llenarServicio();
  }

  eliminarCarrito(index:number,idJuego:any){
    let temporalEncioCarrito : CarritoEnviarModel = {
      idCliente :  Number(localStorage.getItem('idCliente')),
      idJuego : idJuego,
      transaccion : "ELIMINAR_CARRITO"
    }
    console.log(temporalEncioCarrito)
    this._juegoBE.EliminarCarrito(temporalEncioCarrito).subscribe((juegos:any)=>{
      
      if(juegos.Table[0].respuesta =! "OK 200"){
        alert("Error al cargar los juegos => "+juegos.Table[0].leyenda);
      }
      this.carrito.splice(index,1);
    });
  }

  verTotal(valor1:number|undefined, valor2:number):number {
    console.log(valor1);
    if(valor1!=undefined)
      return valor1*valor2;
    else
      return valor2;
  }

  eliminarTodos(){
    this.carrito = [];
  }


 



  
}
