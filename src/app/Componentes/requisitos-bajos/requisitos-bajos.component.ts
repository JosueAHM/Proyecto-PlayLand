import { Component, OnInit } from '@angular/core';
import { Requisitos } from 'src/app/interface/juegos';

@Component({
  selector: 'app-requisitos-bajos',
  templateUrl: './requisitos-bajos.component.html',
  styleUrls: ['./requisitos-bajos.component.css']
})
export class RequisitosBajosComponent implements OnInit {

  ArrayRequisitos: string[] = ['sistema', 'procesador', 'memoria', 'graficos', 'directx', 'almacenamiento'];

  ArrayObjRequisitos: Requisitos[] = [
    {
      sistema: 'Windows Vista or better: 64 bits required',
      procesador: 'Intel 2.0ghz Core 2 Duo or equivalent',
      memoria: '1 GB de RAM',
      graficos: 'Nvidia 450 GTS / Radeon HD 5750 or better',
      directx: 'Versión 10',
      almacenamiento: ' 1 GB de espacio disponible'
    },
    {
      sistema: ' Windows 7',
      procesador: 'X64 Quad Core CPU 2.0GHz+',
      memoria: '8 GB de RAM',
      graficos: '2GB VRAM',
      directx: ' Versión 11',
      almacenamiento: ' 4 GB de espacio disponible'
    },
    {
      sistema: 'Windows 7',
      procesador: 'Core 2 Duo',
      memoria: '4 GB de RAM',
      graficos: 'Intel HD Graphics 4000 or other shader model 4.0',
      directx: 'Versión 10',
      almacenamiento: ' 1 GB de espacio disponible'
    },
    {
      sistema: 'Windows® 8.1 64 bit',
      procesador: 'Intel® Core™ i3-2105 / AMD® FX 4300',
      memoria: '4 GB de RAM',
      graficos: ' Nvidia® GeForce™ GTX 460 / AMD® Radeon™ HD 5850',
      directx: 'Versión 9.0c',
      almacenamiento: ' 6 GB de espacio disponible'
    },
    {
      sistema: ' Windows® 7 64 Bit | Windows® 8.1 64 Bit | Windows® 10 Home 64 Bit',
      procesador: 'Intel® Core™ i5 750 | AMD® FX 4300',
      memoria: '4 GB de RAM',
      graficos: 'Nvidia® GeForce™ GTX 470 (1.28GB) | AMD® HD 5850 (1GB) | Intel Iris Xe G7 (Tiger Lake) | AMD® Radeon™ RX Vega 11 | Steam Deck',
      directx: 'Versión 9.0c',
      almacenamiento: ' 2 GB de espacio en disco duro'
    },
    {
      sistema: 'Windows 7/8/10',
      procesador: '  Intel Core 2 Duo E6320 or equivalent',
      memoria: ' 2 GB de RAM',
      graficos: 'GeForce 7600 512 Mb or equivalent',
      directx: 'Versión 10',
      almacenamiento: '500 MB de espacio disponible'
    },
  ]




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
