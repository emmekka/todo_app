import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class OrdenPrioridad implements AlgoritmoOrdenamiento {
    public ordenar(t: Array<Tarea>):void {
        t.sort((a, b) => {
            const valorA = a.getPrioridad();
            const valorB = b.getPrioridad();
            return valorA - valorB;
        });
    }
}