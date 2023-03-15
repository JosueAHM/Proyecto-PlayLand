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

  auth_Token = localStorage.getItem('token_value');
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' +this.auth_Token
  })

  getCarrito(general:CarritoEnviarModel){
    return this.http.post(this.urlhost + this.urlApi+"/consulta-carito",general,{headers: this.header});
  }

  agregarCarrito(general:CarritoEnviarModel){
    return this.http.post(this.urlhost + this.urlApi+"/anadir-carrito",general,{headers: this.header});
  }
  
  EliminarCarrito(general:CarritoEnviarModel){
    return this.http.post(this.urlhost + this.urlApi+"/eliminar-carrito",general,{headers: this.header});
  }
  

}
