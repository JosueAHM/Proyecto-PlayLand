import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  @Output() disp  : EventEmitter<any> = new EventEmitter();
  constructor() { 
  }
}
