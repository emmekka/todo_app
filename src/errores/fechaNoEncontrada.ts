export class FechaNoEncontrada extends Error {
    constructor(){
        super("No se encontro la fecha indicada.");
    }

    public getMessage():string {
        return this.message;
    }
}