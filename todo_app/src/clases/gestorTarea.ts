import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class GestorTarea {
    private tarea:Array<Tarea>;

    constructor() {
        this.tarea=[];
    }

    public getTareas():Tarea[]{
        return this.tarea;
    }

    public agregarTarea(t:Tarea) {
        this.tarea.push(t);
    }

    public ordenarTarea(a:AlgoritmoOrdenamiento):void {
        a.ordenar(this.tarea);
    }

    public buscarTarea(a:AlgoritmoBusqueda, param:BuscadorParam):Tarea[] {
        return a.buscar(this.tarea, param)
    }
}