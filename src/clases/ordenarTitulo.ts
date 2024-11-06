import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class OrdenTitulo implements AlgoritmoOrdenamiento{

    public ordenar(t: Array<Tarea>):void {
        t.sort((a, b) => {
            const valorA = a.getTitulo();
            const valorB = b.getTitulo();
            return valorA.localeCompare(valorB);   
        });
    }
}