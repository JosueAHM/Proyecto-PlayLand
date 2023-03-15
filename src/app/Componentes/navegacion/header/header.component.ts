import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }
  Color:boolean = true;

  login : string = "Iniciar Sesión";

  ocultarDiv = false;
  irLogin(){
    if(!this.comprobarUsuarioInicioSeccion()){
      this.router.navigate(['/paginaLogin']);
      this.Color=false;  
    }
    else{
      localStorage.removeItem('token_value');
      this.router.navigate(['']);
    }
  }

  habilitarDiv(){
    this.ocultarDiv = !this.ocultarDiv;
    console.log(this.ocultarDiv);
  }

  comprobarUsuarioInicioSeccion():boolean{
    return (localStorage.getItem('token_value') != null);
  }


  irPagPrincipalTienda() {
    this.router.navigate(['/paginaPrincipalTienda']);
  }

  labelUsuarioInicio():string{
    return (localStorage.getItem('token_value') == null) ? 'Iniciar sesión' : 'Cerrar sesión';
  }
}

