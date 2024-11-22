import { EstadoTarea } from "../enums/eEstadoTarea";
import { AlgoritmoTasaFinalizacion } from "../interfaces/algoritmoTasaFinalizacion";
import { AlgoritmoTiempoPromedio } from "../interfaces/algoritmoTiempoPromedio";
import { EstadisticaReturn } from "../interfaces/estadisticaRetorno";
import { Tarea } from "./tarea";
/**
 * la idea de esta clase es que el usario pueda ver el promedio de tareas que completadas y incompletas
 */
export class Estadistica {
    private tareasCompletadas:Array<Tarea>;
    private tareasPendientes:Array<Tarea>;
    private tiempoPromedio:number;
    private tasaFinalizacion:number;
    private promedioHelper:AlgoritmoTiempoPromedio;
    private finalizacionHelper:AlgoritmoTasaFinalizacion;

    constructor(f: AlgoritmoTasaFinalizacion, p: AlgoritmoTiempoPromedio) {
        this.tareasCompletadas=[];
        this.tareasPendientes=[];
        this.tiempoPromedio=0;
        this.tasaFinalizacion=0;
        this.promedioHelper=p;
        this.finalizacionHelper=f;
    }
/**
 * este metodo recibe el array de tareas y se fija el total de tareas completas y de tareas incompletas ademas de calcular el tiempo promedio que llevo 
 * hacer cada tarea o cuanto tiempo esta tardando en el caso que no se haya completado.
 * @param t 
 * @returns estadiscicaReturn
 * 
 * lo que hace el return en este caso es devolver actualizado los campos una vez analizados.
 */
    public calcularEstadisticas(t: Array<Tarea>):EstadisticaReturn {
        this.tareasCompletadas = this.listadoTareasCompletas(t);
        this.tareasPendientes = this.listadoTareasPendientes(t);
        this.tasaFinalizacion = this.finalizacionHelper.calcularTasaFinalizacion(t, this);
        this.tiempoPromedio = this.promedioHelper.calcularTiempoPromedio(t);
        return {
            tareasCompletadas: this.tareasCompletadas,
            tareasPendientes: this.tareasPendientes,
            tiempoPromedio: this.tiempoPromedio,
            tasaFinalizacion: this.tasaFinalizacion,
        }; 
    }

    public listadoTareasCompletas(t:Array<Tarea>):Array<Tarea>{
        this.tareasCompletadas = t.filter(t => t.getEstado() === EstadoTarea.COMPLETADA);
        return this.tareasCompletadas;
    }

    public listadoTareasPendientes(t: Array<Tarea>): Array<Tarea> {
        this.tareasPendientes = t.filter(t => t.getEstado() === EstadoTarea.PENDIENTE);
        return this.tareasPendientes;
    }

}