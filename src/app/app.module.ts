import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Componentes/cart/cart.component';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


//Componentes
import { HeaderComponent } from './Componentes/navegacion/header/header.component';
import { OfertasComponent } from './Componentes/ofertasComp/ofertas/ofertas.component';
import { DescuentosComponent } from './Componentes/ofertasComp/descuentos/descuentos.component';
import { ColeccionesComponent } from './Componentes/ofertasComp/colecciones/colecciones.component';
import { CompraComponent } from './Componentes/compra/compra.component';
import { RequisitosAltosComponent } from './Componentes/requisitos-altos/requisitos-altos.component';
import { RequisitosMediosComponent } from './Componentes/requisitos-medios/requisitos-medios.component';
import { RequisitosBajosComponent } from './Componentes/requisitos-bajos/requisitos-bajos.component';
import { FooterComponent } from './Componentes/navegacion/footer/footer.component';

import { PagProximosLanzamientosComponent } from './Componentes/paginasJuegosComponentes/pag-proximos-lanzamientos/pag-proximos-lanzamientos.component';
import { PagJuegosDisponiblesComponent } from './Componentes/paginasJuegosComponentes/pag-juegos-disponibles/pag-juegos-disponibles.component';
import { PagUltimosLanzamientosComponent } from './Componentes/paginasJuegosComponentes/pag-ultimos-lanzamientos/pag-ultimos-lanzamientos.component';
import { PagRegistroUsuarioComponent } from './Componentes/loginComponentes/pag-registro-usuario/pag-registro-usuario.component';
import { PagPrincipalTiendaComponent } from './Componentes/paginasJuegosComponentes/pag-principal-tienda/pag-principal-tienda.component';
import { LoginHeaderComponent } from './Componentes/loginComponentes/login-header/login-header.component';
import { LoginComponent } from './Componentes/loginComponentes/login/login.component';
import { PaginaPrincipalComponent } from './Componentes/pagina-principal/pagina-principal.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfertasComponent,
    DescuentosComponent,
    ColeccionesComponent,
    CompraComponent,
    CartComponent,
    FooterComponent,
    RequisitosAltosComponent,
    RequisitosMediosComponent,
    RequisitosBajosComponent,
    PagProximosLanzamientosComponent,
    PagJuegosDisponiblesComponent,
    PagUltimosLanzamientosComponent,
    PagRegistroUsuarioComponent,
    PagPrincipalTiendaComponent,
    LoginHeaderComponent,
    LoginComponent,
    PaginaPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
    ConfirmDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    ProgressBarModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
