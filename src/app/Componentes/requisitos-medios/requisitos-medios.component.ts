import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Requisitos } from 'src/app/interface/juegos';
import { CompraComponent } from '../compra/compra.component';


@Component({
  selector: 'app-requisitos-medios',
  templateUrl: './requisitos-medios.component.html',
  styleUrls: ['./requisitos-medios.component.css']
})
export class RequisitosMediosComponent {

  ArrayRequisitos: string[] = ['sistema', 'procesador', 'memoria', 'graficos', 'directx', 'almacenamiento'];

  ArrayObjRequisitos: Requisitos[] = [
    {
      sistema: 'Windows 10',
      procesador: 'Intel Core 2 Duo 2.4Ghz / AMD Athlon 64 X2 5200+, 2.6GHz',
      memoria: '2 GB de RAM',
      graficos: ' 512 MB Nvidia GeForce 8800 / ATI Radeon HD 3870',
      directx: 'Versión 9.0c',
      almacenamiento: ' 10 GB de espacio disponible'
    },
    {
      sistema: 'Windows 7 or later',
      procesador: '  Intel Core i5 2.6GHz or similar',
      memoria: '6 GB de RAM',
      graficos: ' GeForce GTX 700 series or similar',
      directx: ' Versión 11',
      almacenamiento: ' 10 GB de espacio disponible'
    },
    {
      sistema: 'Windows® 10 / Windows® 11 64-bit',
      procesador: '3 GHz Dual Core Processor',
      memoria: ' 6 GB de RAM',
      graficos: ' GTX 960 Series or Equivalent',
      directx: 'Versión 11',
      almacenamiento: ' 00 GB de espacio disponible'
    },
    {
      sistema: 'Windows 10 version 15063.0 or higher',
      procesador: 'Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz',
      memoria: '8 GB de RAM',
      graficos: '  NVidia 650TI OR AMD R7 250x',
      directx: 'Versión 12',
      almacenamiento: ' 80 GB de espacio disponible'
    },
    {
      sistema: 'Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit',
      procesador: ' Intel Core i3-2100 | AMD FX-6300',
      memoria: '4 GB de RAM',
      graficos: 'NVIDIA GeForce GTX 760 | AMD Radeon HD 7950',
      directx: 'Versión 11',
      almacenamiento: ' 25 GB de espacio en disco duro'
    },
    {
      sistema: 'Windows 7+',
      procesador: ' Intel Core i3-2100 / AMD® FX-6300',
      memoria: ' 8 GB de RAM',
      graficos: '  Nvidia GTX 560',
      directx: 'Versión 11',
      almacenamiento: ' 6 GB de espacio disponible'
    },
  ]


  constructor(private dialog: MatDialog) {

  }

  openDialogSesion() {
    this.dialog.open(CompraComponent)
  }
}
