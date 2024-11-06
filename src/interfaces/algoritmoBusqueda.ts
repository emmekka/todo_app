import { Tarea } from "../clases/tarea";
import { BuscadorParam } from "./buscadorParam";

export interface AlgoritmoBusqueda {
    buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[]
}