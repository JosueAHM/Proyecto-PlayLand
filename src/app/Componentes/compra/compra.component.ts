import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Juegos } from 'src/app/interface/juegos';
import { OfertasComponent } from '../ofertasComp/ofertas/ofertas.component';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  constructor(private router: Router, private dialogRef: MatDialogRef<CompraComponent>, @ Inject(MAT_DIALOG_DATA) public data: Juegos, private dialog:MatDialog) { 
    
  }
  

  cerrar()
  {
    this.dialogRef.close(); 
  }
  ngOnInit(): void {
      
  }
}
