import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pag-registro-usuario',
  templateUrl: './pag-registro-usuario.component.html',
  styleUrls: ['./pag-registro-usuario.component.css']
})
export class PagRegistroUsuarioComponent implements OnInit {
  registroForm: FormGroup | any;
  constructor(
    private router:Router,
    private _snackBar: MatSnackBar
  ) {
    this.registroForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      confirmPassword: new FormControl('', [Validators.required,Validators.pattern('')])

    });
  }

  ngOnInit(): void {
  }

  registroCliente(){

  }

}
