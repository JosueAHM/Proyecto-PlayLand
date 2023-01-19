import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfertasComponent,
    DescuentosComponent,
    ColeccionesComponent,
    CompraComponent,
    FooterComponent,
    RequisitosAltosComponent,
    RequisitosMediosComponent,
    RequisitosBajosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
