import { EstadoTarea } from "../enums/eEstadoTarea";
import { Tarea } from "./tarea";

export class Estadistica {
    private tareasCompletadas:Array<Tarea>;
    private tareasPendientes:Array<Tarea>;
    private tiempoPromedio:number;
    private tasaFinalizacion:number

    constructor() {
        this.tareasCompletadas=[];
        this.tareasPendientes=[];
        this.tiempoPromedio=0;
        this.tasaFinalizacion=0;
    }

    public calcularEstadisticas(t:Array<Tarea>):Estadistica {
        this.tareasCompletadas = this.listadoTareasCompletas(t);
        this.tareasPendientes = this.listadoTareasPendientes(t);
        this.tasaFinalizacion = this.calcularTasaFinalizacion(t);
        this.tiempoPromedio = this.calcularPromedioTiempo(t);
        return this; 
    }

    public listadoTareasCompletas(t:Array<Tarea>):Array<Tarea>{
        this.tareasCompletadas = t.filter(t => t.getEstado() === EstadoTarea.COMPLETADA)
        return this.tareasCompletadas;
    }

    public listadoTareasPendientes(t: Array<Tarea>): Array<Tarea> {
        this.tareasPendientes = t.filter(t => t.getEstado() === EstadoTarea.PENDIENTE)
        return this.tareasPendientes;
    }

    public calcularTasaFinalizacion(t:Array<Tarea>):number{
        const completadas= this.listadoTareasCompletas(t).length;
        const total=t.length;
        if (total===0) {
            this.tasaFinalizacion=0;
        } else {
            this.tasaFinalizacion = (completadas / total)*100;
        }
        return parseFloat(this.tasaFinalizacion.toFixed(2)); 
    }

    public calcularPromedioTiempo(t:Array<Tarea>):number{
        const tiempoTotal=t.reduce((total, tarea)=>total + tarea.getTiempoDedicado(), 0)
        const totalTareas=t.length;
        if (totalTareas===0) {
            this.tiempoPromedio=0;
        } else {
            this.tiempoPromedio=tiempoTotal/totalTareas;
        }
        return this.tiempoPromedio;
    }
}