import { Tarea } from "../clases/tarea";

export interface EstadisticaReturn {
    tareasCompletadas:Tarea[]
    tareasPendientes:Tarea[]
    tiempoPromedio:number;
    tasaFinalizacion:number;
}