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

  ocultarDiv = false;
  irLogin(){
    this.router.navigate(['/paginaLogin']);
    this.Color=false;
  }

  habilitarDiv(){
    this.ocultarDiv = !this.ocultarDiv;
    console.log(this.ocultarDiv);
  }




  irPagPrincipalTienda() {
    this.router.navigate(['/paginaPrincipalTienda']);
  }
  }

