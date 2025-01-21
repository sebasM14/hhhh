import { ActualizarProductosComponent } from './components/Productos/actualizar-productos/actualizar-productos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ContactoComponent } from './components/contenedor/contacto/contacto.component';
import { AcercaDeComponent } from './components/contenedor/acerca-de/acerca-de.component';
import { ListarProductosComponent } from './components/Productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/Productos/crear-productos/crear-productos.component';
import { ErrorComponent } from './components/contenedor/error/error.component';
import { AdministrarProductosComponent } from './components/Productos/administrar-productos/administrar-productos.component';
import { LoginComponent } from './components/contenedor/login/login.component';

const routes: Routes = [



  {path: 'home', component: InicioComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'aboutMe', component: AcercaDeComponent},
  {path: 'login', component: LoginComponent},



{
  path: 'producto',children: [

  {path: 'list', component: ListarProductosComponent},
    {path: 'add', component: CrearProductosComponent},
    {path: 'update', component: ActualizarProductosComponent},
    {path: 'admin', component: AdministrarProductosComponent},
  
     

    {path: '', redirectTo: 'list', pathMatch: 'full' },
    {path: '**', component: ErrorComponent}

  ]

},



  /*Ruta obligatoria */
  {path: '',redirectTo: 'home',pathMatch:"full"},
  {path: '**',component: ErrorComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
