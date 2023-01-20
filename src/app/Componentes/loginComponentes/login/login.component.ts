import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  constructor(
    private router:Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
  }

  ngOnInit(): void {
  }

  loginCliente(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credenciales = {
      email: "Justin@hotmail.com",
      password: "Justin@123"
    }

    if(this.loginForm.get("email")!.value == credenciales.email &&
        this.loginForm.get("password")!.value == credenciales.password){
        this.router.navigate(['/paginaPrincipalTienda']);


    }else{
      this._snackBar.open('Usuario o contrasena incorrecto', 'Aceptar');

    }
  }

  irPaginaRegistro(){
    this.router.navigate(['/paginaRegistroUsuario']);
  }
}
