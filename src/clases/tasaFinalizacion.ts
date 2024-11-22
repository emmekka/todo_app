import { AlgoritmoTasaFinalizacion } from "../interfaces/algoritmoTasaFinalizacion";
import { Estadistica } from "./estadistica";
import { Tarea } from "./tarea";
/**
 * esta clase muestra el total de tareas
 */
export class TasaFinalizacion implements AlgoritmoTasaFinalizacion {
    public calcularTasaFinalizacion(t: Array<Tarea>, e:Estadistica): number {
        const tareasCompletas = e.listadoTareasCompletas(t).length;
        const totalTareas = t.length;
        let tasaFinalizacion=0;
        if (totalTareas !== 0) {
            tasaFinalizacion = (tareasCompletas / totalTareas) * 100;
        } 
        return parseFloat(tasaFinalizacion.toFixed(2));
    }
}