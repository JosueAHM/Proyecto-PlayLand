import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GeneralJuegos } from '../Models/consulta_general.model';

@Injectable({
  providedIn: 'root'
})
export class JuegosService_BE {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Juegos';
  constructor(private http: HttpClient) { }
  getJuegosAleatorios(){
    return this.http.get(this.urlhost + this.urlApi+"/consulta-juegos-aleotorios");
  }
  getJuegosDisponibles(){
    return this.http.get(this.urlhost + this.urlApi+"/consulta-juegos");
  }
  getJuegosLazamientos(general:GeneralJuegos){
    return this.http.post(this.urlhost + this.urlApi+"/consulta-juegos-lanzamientos",general);
  }
//   getProductosId(id: string){
//     console.log(this.urlhost + this.urlApi+"/"+id);
//     return this.http.get(this.urlhost + this.urlApi+"/"+id);
//   }
//   deleteProductos(id: string){
//     return this.http.delete(this.urlhost + this.urlApi+"/"+id);
//   }
//   editarProductos(proveedor : ProductoModel){
//     return this.http.put(this.urlhost + this.urlApi+"/"+proveedor.id,proveedor);
//   }

}
