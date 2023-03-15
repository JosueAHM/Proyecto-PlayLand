import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Juegos } from 'src/app/interface/juegos';
import { OfertasComponent } from '../ofertasComp/ofertas/ofertas.component';
import { JuegosModel } from 'src/app/Models/juegos.model';
import { JuegosService } from 'src/app/services/juegos.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.Scss'],
  providers: [MessageService]
})
export class CompraComponent implements OnInit {
  constructor(
          private router: Router, 
          private _servicioJuegosData : JuegosService,
          private dialogRef: MatDialogRef<CompraComponent>, 
          @ Inject(MAT_DIALOG_DATA) 
          public data: Juegos, 
          private dialog:MatDialog,
          private messageService: MessageService, 
          private primengConfig: PrimeNGConfig) { 
    
  }

  juegosComprar : JuegosModel = this._servicioJuegosData.getJuegosComprar();
  
  inicioBoton = false;

  cerrar()
  {
    this.inicioBoton = true;
    this.showTopLeft();
    setTimeout(() => {
      this.dialogRef.close()
     }, 3000);
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  showTopLeft() {
    this.messageService.add({key: 'tl', severity:'success', summary: 'Juego comprado con exito', detail: 'Message Content',closable:false});
  }
}
