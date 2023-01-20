import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pag-principal-tienda',
  templateUrl: './pag-principal-tienda.component.html',
  styleUrls: ['./pag-principal-tienda.component.css']
})
export class PagPrincipalTiendaComponent implements OnInit {

  constructor(
    private router: Router,
  ){

  }

  ngOnInit(): void {
  }
}



