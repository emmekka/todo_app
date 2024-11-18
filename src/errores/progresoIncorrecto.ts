export class ProgresoIncorrecto extends Error{
    constructor(){
        super("El progreso debe ser un valor entre 0 y 100.");
    }

    public getMessage():string {
        return this.message;
    }
}