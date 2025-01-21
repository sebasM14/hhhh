import { Component } from '@angular/core';
import { ARREGLO_SUPLEMENTOS } from '../../../mocks/productos-mock';
import { mostrarMensaje } from '../../../utilities/mensaje';
import { Productos } from '../../../models/productos';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css'
})
export class CrearProductosComponent {
  public objProducto:Productos;
  constructor(private toastr:ToastrService, private navegacion:Router, private lenguaje:BsLocaleService){
    this.objProducto= this.inicializarProducto();
    lenguaje.use('es')
  
  }
  /*

  inicializar :logica de negocio 
  */
  private inicializarProducto() :Productos {
    return new Productos(0,"","",0,0,new Date());
  
  }
  public enviarFormulario(formulario: NgForm){
    let codigo=ARREGLO_SUPLEMENTOS.length +1
    this.objProducto.codSuplemento=codigo;
    ARREGLO_SUPLEMENTOS.push(this.objProducto);
    mostrarMensaje("success","registro completado del municipio","exitoo!!",this.toastr);
  this.navegacion.navigate(['/producto/list']);
    this.objProducto=this.inicializarProducto();
  }
  

}
