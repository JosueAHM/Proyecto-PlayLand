import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioLoginModel } from 'src/app/Models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.Scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  constructor(
    private router:Router,
    private _snackBar: MatSnackBar,
    private _usuarioService:UsuarioService
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

    let temporalUser : UsuarioLoginModel = {
      correo : this.loginForm.get("email")!.value,
      password : this.loginForm.get("password")!.value
    }

    this._usuarioService.login(temporalUser).subscribe((resultado:any)=>{
      if(resultado.respuesta=="200"){
        this.router.navigate(['/paginaPrincipalTienda']);
        localStorage.setItem('token_value', resultado.token);
        localStorage.setItem('idCliente', resultado.idCliente);
      }
      else{
        this._snackBar.open('Usuario o contraseña incorrecto', 'Aceptar');
      }
    });

  }

  irPaginaRegistro(){
    this.router.navigate(['/paginaRegistroUsuario']);
  }
}
