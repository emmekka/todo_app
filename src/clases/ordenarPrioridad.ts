import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class OrdenPrioridad implements AlgoritmoOrdenamiento {
    public ordenar(t: Array<Tarea>):void {
        t.sort((a, b) => {
            const valorA = a.getPrioridad()??Infinity;
            const valorB = b.getPrioridad()??Infinity;
            return valorA - valorB;
        });
    }
}