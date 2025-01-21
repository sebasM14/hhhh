export class Productos {

    public codSuplemento: number;
    public nombreSuplemento: string;
    public tipoSuplemento: string; // Por ejemplo, proteína, aminoácidos
    public cantidadPorEnvase: number; // Cantidad de porciones o miligramos por envase
    public precio: number; 
    public fechaCaducidad: Date; // Fecha de caducidad del producto

    constructor(cod: number, nom: string, tipo: string, cantidad: number, precio: number, fechaCaducidad: Date) {
        this.codSuplemento = cod;
        this.nombreSuplemento = nom;
        this.tipoSuplemento = tipo;
        this.cantidadPorEnvase = cantidad;
        this.precio = precio;
        this.fechaCaducidad = fechaCaducidad;
    }
}