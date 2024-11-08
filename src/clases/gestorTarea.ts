import { Categoria } from "../enums/eCategoria";
import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Estadistica } from "./estadistica";
import { Tarea } from "./tarea";

export class GestorTarea {
    private tarea:Array<Tarea>;

    constructor() {
        this.tarea=[];
    }

    public crearTarea(nroId:number, categoria:Categoria):Tarea {
        const tarea= new Tarea(nroId,categoria)
        this.agregarTarea(tarea)
        return tarea
    }

    public getTareas():Tarea[]{
        return this.tarea;
    }

    public agregarTarea(t:Tarea) {
        this.tarea.push(t);
    }

    public eliminarTarea(t:Tarea) {
        this.tarea.splice(this.tarea.indexOf(t),1)
    }

    public obtenerEstadisticas(e:Estadistica):Estadistica {
        return e.calcularEstadisticas(this.tarea)
    }

    public ordenarTarea(a:AlgoritmoOrdenamiento):void {
        a.ordenar(this.tarea);
    }

    public buscarTarea(a:AlgoritmoBusqueda, param:BuscadorParam):Tarea[] {
        return a.buscar(this.tarea, param)
    }
}