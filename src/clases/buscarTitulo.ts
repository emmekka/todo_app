import { TituloNoEncontrado } from "../errores/tituloNoEncontrado";
import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { Tarea } from "./tarea";
/**
 * lo mismo que en la clase buscarFecha solo que aca se busca por el titulo.
 * en ambos casos usamos un filter para busacar dentro el array la tarea deseada.
 */
export class BuscarTitulo implements AlgoritmoBusqueda {
    public buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[] {
        const resultado=t.filter(tarea=>tarea.getTitulo()===param.titulo);
        if (resultado.length===0) {
            throw TituloNoEncontrado;
        }
        return resultado;
    }
}