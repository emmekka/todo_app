import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class OrdenTitulo implements AlgoritmoOrdenamiento {

    public ordenar(t: Array<Tarea>): void {
        t.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo(), undefined, { sensitivity: "base" }));
    }
}