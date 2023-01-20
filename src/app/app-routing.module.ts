import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfertasComponent } from './Componentes/ofertasComp/ofertas/ofertas.component';
import { CompraComponent } from './Componentes/compra/compra.component';
import { RequisitosAltosComponent } from './Componentes/requisitos-altos/requisitos-altos.component';
import { RequisitosMediosComponent } from './Componentes/requisitos-medios/requisitos-medios.component';
import { RequisitosBajosComponent } from './Componentes/requisitos-bajos/requisitos-bajos.component';
import { CartComponent } from './Componentes/cart/cart.component';
import { PaginaPrincipalComponent } from './Componentes/pagina-principal/pagina-principal.component';
import { HeaderComponent } from './Componentes/navegacion/header/header.component';
import { LoginComponent } from './Componentes/loginComponentes/login/login.component';
import { PagUltimosLanzamientosComponent } from './Componentes/paginasJuegosComponentes/pag-ultimos-lanzamientos/pag-ultimos-lanzamientos.component';
import { PagProximosLanzamientosComponent } from './Componentes/paginasJuegosComponentes/pag-proximos-lanzamientos/pag-proximos-lanzamientos.component';
import { PagJuegosDisponiblesComponent } from './Componentes/paginasJuegosComponentes/pag-juegos-disponibles/pag-juegos-disponibles.component';
import { PagRegistroUsuarioComponent } from './Componentes/loginComponentes/pag-registro-usuario/pag-registro-usuario.component';
import { PagPrincipalTiendaComponent } from './Componentes/paginasJuegosComponentes/pag-principal-tienda/pag-principal-tienda.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'paginaPrincipal', component: PaginaPrincipalComponent },

  { path: 'ofertas', component: OfertasComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  

  { path: 'requisitosAltos', component: RequisitosAltosComponent },
  { path: 'requisitosMedios', component: RequisitosMediosComponent },
  { path: 'requisitosBajos', component: RequisitosBajosComponent },

  { path: 'paginaLogin', component: LoginComponent },
  { path: 'paginaUltimosLanzamientos', component: PagUltimosLanzamientosComponent},
  { path: 'paginaProximosLanzamientos', component: PagProximosLanzamientosComponent},
  { path: 'paginaJuegosDisponibles', component: PagJuegosDisponiblesComponent},
  { path: 'paginaRegistroUsuario', component: PagRegistroUsuarioComponent},
  { path: 'paginaPrincipalTienda', component: PagPrincipalTiendaComponent},
  { path: '**', redirectTo: 'paginaPrincipal'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
