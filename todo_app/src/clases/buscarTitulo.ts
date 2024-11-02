import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { Tarea } from "./tarea";

export class BuscarTitulo implements AlgoritmoBusqueda {
    public buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[] {
        const resultado=t.filter(tarea=>tarea.getTitulo()===param.titulo)
        if (resultado.length===0) {
            throw new Error("No se encontro el titulo buscado");  
        }
        return resultado;
    }
}