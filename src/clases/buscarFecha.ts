import { FechaNoEncontrada } from "../errores/fechaNoEncontrada";
import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { Tarea } from "./tarea";
/**
 * esta clase se encarga de buscar la tarea con la fecha que ingreso el usario. 
 * en caso que la fecha no este encotrada, se tira una excepcion.
 * 
 */

export class BuscarFecha implements AlgoritmoBusqueda {
    public buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[] {
        const resultado=t.filter(tarea=> tarea.getFechaVencimiento()?.getTime()===param.fecha?.getTime());
        if (resultado.length === 0) {
            throw new FechaNoEncontrada;
        }
        return resultado;
    }
}