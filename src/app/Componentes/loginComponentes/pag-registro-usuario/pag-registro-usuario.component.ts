import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioCrearModel } from 'src/app/Models/usuarioCrear.model';

@Component({
  selector: 'app-pag-registro-usuario',
  templateUrl: './pag-registro-usuario.component.html',
  styleUrls: ['./pag-registro-usuario.component.css']
})
export class PagRegistroUsuarioComponent implements OnInit {
  registroForm: FormGroup | any;
  constructor(
    private router:Router,
    private _snackBar: MatSnackBar,
    private _usuarioService:UsuarioService
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
    let userTemp : UsuarioCrearModel = {
      nombres : "",
      apellidos : "",
      correo : this.registroForm.get("email")!.value,
      contrasena : this.registroForm.get("password")!.value
    }
    this._usuarioService.crearUsuario(userTemp).subscribe((data:any)=>{
      if(data.Table[0].respuesta =! "OK 200"){
        alert("Error crear cuenta => "+data.Table[0].leyenda);
      }
      else{
        alert("Cuenta creada con exito ahora inicia sessión");
        this.registroForm.reset();
      }
    });
  }

}
