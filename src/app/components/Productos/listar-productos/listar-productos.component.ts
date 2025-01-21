import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../models/productos';
import { ARREGLO_SUPLEMENTOS } from '../../../mocks/productos-mock';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnInit  {

public arrproductos:Productos [];

  constructor() {
    this.arrproductos =ARREGLO_SUPLEMENTOS
  }
  ngOnInit() {
    console.log(this.arrproductos); // Para verificar si los datos se cargan correctamente
  }


}
