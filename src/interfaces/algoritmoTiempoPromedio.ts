import { Tarea } from "../clases/tarea";

export interface AlgoritmoTiempoPromedio {
    calcularTiempoPromedio(t:Array<Tarea>):number
}