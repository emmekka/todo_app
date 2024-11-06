export class Etiqueta {
    private nombre:string;

    constructor(n:string) {
        this.nombre=n
    }

    public getNombre():string {
        return this.nombre;
    }
}