import { Component } from '@angular/core';
import { ARREGLO_IMAGENES } from '../../../utilidades/imagenes-inicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
  
})
export class InicioComponent {

  public arregloImagenes:any =[];
  
  constructor(){
    this.arregloImagenes=ARREGLO_IMAGENES;


  }

  
}
