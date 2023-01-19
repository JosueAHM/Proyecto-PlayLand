import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from './Componentes/ofertasComp/ofertas/ofertas.component';
import { DescuentosComponent } from './Componentes/ofertasComp/descuentos/descuentos.component';
import { CompraComponent } from './Componentes/compra/compra.component';
import { RequisitosAltosComponent } from './Componentes/requisitos-altos/requisitos-altos.component';
import { RequisitosMediosComponent } from './Componentes/requisitos-medios/requisitos-medios.component';
import { RequisitosBajosComponent } from './Componentes/requisitos-bajos/requisitos-bajos.component';

const routes: Routes = [
  { path: 'ofertas', component: OfertasComponent },
  { path: 'descuentos', component: DescuentosComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'requisitosAltos', component: RequisitosAltosComponent },
  { path: 'requisitosMedios', component: RequisitosMediosComponent },
  { path: 'requisitosBajos', component: RequisitosBajosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
