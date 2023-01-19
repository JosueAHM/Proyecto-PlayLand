import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Juegos } from 'src/app/interface/juegos';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  constructor(private router: Router, private dialogRef: MatDialogRef<CompraComponent>, @ Inject(MAT_DIALOG_DATA) public data: Juegos) { 
    
  }
   
  

  ngOnInit(): void {
      
  }
}
