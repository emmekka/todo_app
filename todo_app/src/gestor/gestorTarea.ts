import { Ordedar } from "../algoritmo/ordenar";
import { Prioridad } from "../enums/ePrioridad";
import { Tarea } from "../tarea.ts/tarea";

export class GestorTarea {
    private tarea:Array<Tarea>;
    private ordenar:Ordedar;

    constructor(o:Ordedar) {
        this.tarea=[];
        this.ordenar=o;
    }

    public agregarTarea(t:Tarea) {
        this.tarea.push(t);
    }

    public ordenarTarea(selector: (t: Tarea) => string | Date | Prioridad) {
        this.ordenar.ordenar(this.tarea, selector);
    }
}