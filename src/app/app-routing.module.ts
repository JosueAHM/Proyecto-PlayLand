import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from './Componentes/ofertasComp/ofertas/ofertas.component';
import { DescuentosComponent } from './Componentes/ofertasComp/descuentos/descuentos.component';
import { CompraComponent } from './Componentes/compra/compra.component';

const routes: Routes = [
  {path: 'ofertas', component: OfertasComponent},
  {path: 'descuentos', component: DescuentosComponent},
  {path: 'compra', component: CompraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
