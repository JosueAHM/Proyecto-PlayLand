import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarritoEnviarModel } from '../Models/carrito.enviar';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Carrito';
  constructor(private http: HttpClient) { }

  getCarrito(general:CarritoEnviarModel){
    return this.http.post(this.urlhost + this.urlApi+"/consulta-carito",general);
  }

  agregarCarrito(general:CarritoEnviarModel){
    return this.http.post(this.urlhost + this.urlApi+"/anadir-carrito",general);
  }
  
  EliminarCarrito(general:CarritoEnviarModel){
    return this.http.post(this.urlhost + this.urlApi+"/eliminar-carrito",general);
  }
  

}
