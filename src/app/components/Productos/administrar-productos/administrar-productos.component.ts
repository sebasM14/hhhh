import { Component, TemplateRef } from '@angular/core';
import { mostrarMensaje } from '../../../utilities/mensaje';
import { Productos } from '../../../models/productos';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_SUPLEMENTOS } from '../../../mocks/productos-mock';

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrl: './administrar-productos.component.css'
})
export class AdministrarProductosComponent {
  public arrproductos: Productos[];
  public ProductoSeleccionada: Productos;


  public tituloModal:string;
  public contendioModal:string;
  public cuerpoModal:string;

  public modalRef:BsModalRef;
  public tmp:any;

  constructor( private modalService:BsModalService,private toastr: ToastrService){
    this.arrproductos=ARREGLO_SUPLEMENTOS;
    this.ProductoSeleccionada=this.inicializarProducto();
    
    this.tituloModal="";
    this.contendioModal="";
    this.cuerpoModal="";
    this.modalRef=this.tmp;
    
  
    
}

private inicializarProducto():Productos{
    return new Productos(0,"","",0,0,new Date());
}

private eliminarProducto(objEliminar:Productos):void{
  if(objEliminar.codSuplemento !==0){
    for (let i = 0; i < this.arrproductos.length; i++) {
      if(this.arrproductos[i] !== undefined){
        let comparar = this.arrproductos[i].codSuplemento;
        if(comparar == objEliminar.codSuplemento){
          this.arrproductos.splice(i, 1);
          mostrarMensaje("success", "Uy lo eliminó", "Exitoso !!", this.toastr);

        }
      }
      
    }

  }else{
    this.modalRef.hide();
    }


}


/**ventana modal  */
public abrirVentanaModal(template:TemplateRef<any>,objProducto:Productos):void {
  this.modalRef=this.modalService.show(template,{backdrop:"static",class:"lg"})
  this.ProductoSeleccionada=objProducto;
  this.tituloModal="eliminarr Producto";
  this.contendioModal="¿Esta seguro de eliminar el producto";
  this.cuerpoModal="Casa",objProducto.nombreSuplemento;

}
public botonCancelar(): void {
 mostrarMensaje("error","eliminar","perra julian",this.toastr);
this.modalRef.hide();
this.ProductoSeleccionada=this.inicializarProducto();
}
public botonEliminar():void {
  this.eliminarProducto(this.ProductoSeleccionada);
  this.modalRef.hide();
  this.ProductoSeleccionada=this.inicializarProducto();
}

}



