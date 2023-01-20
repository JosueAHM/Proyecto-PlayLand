import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';




import { Juegos } from 'src/app/juegos';
import { JuegosService } from 'src/app/services/juegos.service';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  carrito: Juegos[] = []
  constructor(private _servicesJuegos:JuegosService){

  }



  cargarJuegosCarrito(){

    this.carrito = this._servicesJuegos.carrito
  }
  ngOnInit(): void {
    this.cargarJuegosCarrito();
    
    console.log("POSIII",this.carrito[0].nombre)
  }


 



  
}
