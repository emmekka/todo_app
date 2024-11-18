import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";

export class OrdenTitulo implements AlgoritmoOrdenamiento {

    public ordenar(t: Array<Tarea>): void {
        t.sort((a, b) => {
            let tituloA = a.getTitulo() === "documento sin titulo" ? '\uffff':a.getTitulo()
            let tituloB = b.getTitulo() === "documento sin titulo" ? '\uffff':b.getTitulo()
            return tituloA.localeCompare(tituloB,undefined, { sensitivity: "base" });
        });
    }
}