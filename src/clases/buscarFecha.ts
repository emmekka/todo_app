import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { Tarea } from "./tarea";

export class BuscarFecha implements AlgoritmoBusqueda {
    public buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[] {
        const resultado=t.filter(tarea=> tarea.getFechaVencimiento()?.getTime()===param.fecha?.getTime())
        if (resultado.length === 0) {
            throw new Error("No se encontro la fecha indicada");
        }
        return resultado;
    }
}