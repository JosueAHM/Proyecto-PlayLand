import { Component, OnInit } from '@angular/core';
import { Requisitos } from 'src/app/interface/juegos';

@Component({
  selector: 'app-requisitos-altos',
  templateUrl: './requisitos-altos.component.html',
  styleUrls: ['./requisitos-altos.component.css']
})
export class RequisitosAltosComponent implements OnInit {

  ArrayRequisitos: string[] = ['sistema', 'procesador', 'memoria', 'graficos', 'directx', 'almacenamiento'];

  ArrayObjRequisitos: Requisitos[] = [
    {
      sistema: 'Windows 10',
      procesador: 'INTEL CORE I5-8400 or AMD RYZEN 3 3300X',
      memoria: '12 GB de RAM',
      graficos: ' NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB',
      directx: 'Versión 12',
      almacenamiento: ' 60 GB de espacio disponible'
    },
    {
      sistema: '64-bit Windows 7, 64-bit Windows 8 (8.1)',
      procesador: ' Intel CPU Core i5-2500K 3.3GHz / AMD A10-5800K APU (3.8GHz)',
      memoria: '6 GB de RAM',
      graficos: '  Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      directx: ' Versión 11',
      almacenamiento: ' 50 GB de espacio disponible'
    },
    {
      sistema: 'Windows® 10 / Windows® 11 64-bit',
      procesador: 'AMD A8-7600 / Intel® Core™ i3-3210',
      memoria: ' 8 GB de RAM',
      graficos: ' AMD Radeon™ RX 460 / Intel® Arc™ A380 / NVIDIA® GeForce® GTX 750 Ti',
      directx: 'Versión 12',
      almacenamiento: ' 30 GB de espacio disponible'
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
      sistema: 'Windows 10',
      procesador: 'Intel Core i3-4160 a 3,6 GHz o AMD equivalente',
      memoria: '8 GB de RAM',
      graficos: 'NVIDIA GTX 950 o AMD Radeon RX 470',
      directx: 'Versión 12',
      almacenamiento: ' 75 GB de espacio en disco duro'
    },
    {
      sistema: 'Windows 7/8/10 (64-bit OS required)',
      procesador: ' Intel Core i3-4160 @ 3.60GHz or equivalent',
      memoria: ' 6 GB de RAM',
      graficos: '  NVIDIA GeForce GTX 660 2GB, GTX 750Ti 2GB, or equivalent',
      directx: 'Versión 11',
      almacenamiento: ' 60 GB de espacio disponible'
    },
  ]




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
