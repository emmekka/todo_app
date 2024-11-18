export class TituloNoEncontrado extends Error{
    constructor(){
        super("No se encontro el titulo buscado.");
    }
    public getMessage():string {
        return this.message;
    }
}