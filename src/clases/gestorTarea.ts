import { Categoria } from "../enums/eCategoria";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { EstadisticaReturn } from "../interfaces/estadisticaRetorno";
import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { BuscadorSetter } from "./buscadorSetter";
import { Estadistica } from "./estadistica";
import { Tarea } from "./tarea";

export class GestorTarea {
    private tarea:Array<Tarea>;

    constructor() {
        this.tarea=[];
    }

    public crearTarea(categoria:Categoria):Tarea {
        const tarea= new Tarea(categoria);
        return tarea;
    }

    public getTareas():Tarea[]{
        return this.tarea;
    }

    public agregarTarea(t:Tarea) {
        this.tarea.push(t);
    }

    public eliminarTarea(t:Tarea) {
        this.tarea.splice(this.tarea.indexOf(t),1);
    }

    public obtenerEstadisticas(e:Estadistica):EstadisticaReturn {
        return e.calcularEstadisticas(this.tarea);
    }

    public ordenarTarea(a:AlgoritmoOrdenamiento):void {
        a.ordenar(this.tarea);
    }

    public buscarTarea(a:BuscadorSetter, param:BuscadorParam):Tarea[] {
        return a.busqueda(this.tarea, param);
    }
}