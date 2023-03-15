import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarritoEnviarModel } from '../Models/carrito.enviar';
import { UsuarioLoginModel } from '../Models/usuario.model';
import { UsuarioCrearModel } from '../Models/usuarioCrear.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Usuario';
  constructor(private http: HttpClient) { }

  login(general:UsuarioLoginModel){
    return this.http.post(this.urlhost + this.urlApi+"/login",general);
  }
  crearUsuario(general:UsuarioCrearModel){
    return this.http.post(this.urlhost + this.urlApi+"/crear",general);
  }
}
