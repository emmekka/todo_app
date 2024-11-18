import { Marcador } from "../interfaces/marcador";

export class Etiqueta implements Marcador{
    private nombre:string;

    constructor(n:string) {
        this.nombre=n;
    }

    public getNombre():string {
        return this.nombre;
    }
}