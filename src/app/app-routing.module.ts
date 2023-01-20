import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfertasComponent } from './Componentes/ofertasComp/ofertas/ofertas.component';
import { CompraComponent } from './Componentes/compra/compra.component';
import { RequisitosAltosComponent } from './Componentes/requisitos-altos/requisitos-altos.component';
import { RequisitosMediosComponent } from './Componentes/requisitos-medios/requisitos-medios.component';
import { RequisitosBajosComponent } from './Componentes/requisitos-bajos/requisitos-bajos.component';
import { PaginaPrincipalComponent } from './Componentes/pagina-principal/pagina-principal.component';
import { HeaderComponent } from './Componentes/navegacion/header/header.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'paginaPrincipal', component: PaginaPrincipalComponent },

  { path: 'ofertas', component: OfertasComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'header', component: HeaderComponent },
  

  { path: 'requisitosAltos', component: RequisitosAltosComponent },
  { path: 'requisitosMedios', component: RequisitosMediosComponent },
  { path: 'requisitosBajos', component: RequisitosBajosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
