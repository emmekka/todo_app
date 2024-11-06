import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class OrdenFecha implements AlgoritmoOrdenamiento {
    public ordenar(t: Array<Tarea>):void {
        t.sort((a, b) => {
            const valorA = a.getFechaVencimiento()?.getTime()?? Infinity
            const valorB = b.getFechaVencimiento()?.getTime() ?? Infinity
            return valorA-valorB
        })  
    }
}