import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/contenedor/cabecera/cabecera.component';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ErrorComponent } from './components/contenedor/error/error.component';
import { ContactoComponent } from './components/contenedor/contacto/contacto.component';
import { AcercaDeComponent } from './components/contenedor/acerca-de/acerca-de.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import { FormsModule } from '@angular/forms';
import { ListarProductosComponent } from './components/Productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/Productos/crear-productos/crear-productos.component';
import { ActualizarProductosComponent } from './components/Productos/actualizar-productos/actualizar-productos.component';
import { AdministrarProductosComponent } from './components/Productos/administrar-productos/administrar-productos.component';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/contenedor/login/login.component';

defineLocale('es', esLocale);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    ErrorComponent,
    ContactoComponent,
    AcercaDeComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    ActualizarProductosComponent,
    AdministrarProductosComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule aquí
    FormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
