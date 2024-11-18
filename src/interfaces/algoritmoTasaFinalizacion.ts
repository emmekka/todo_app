import { Estadistica } from "../clases/estadistica";
import { Tarea } from "../clases/tarea";

export interface AlgoritmoTasaFinalizacion {
    calcularTasaFinalizacion(t:Array<Tarea>, e:Estadistica):number
}