import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { BuscarFecha } from "./buscarFecha";
import { BuscarTitulo } from "./buscarTitulo";
import { Tarea } from "./tarea";
/**
 * esta clase se encarga de poder settear los algortimos de busqueda que el usario necesite
 *  
 * 
 */
export class BuscadorSetter {
    private buscar:AlgoritmoBusqueda;

    constructor(){
        this.buscar=undefined as unknown as AlgoritmoBusqueda;
    }

    private busquedaSetter(param:BuscadorParam):void {
        if(param.titulo) {
            this.buscar=new BuscarTitulo();
        }
        if(param.fecha){
            this.buscar=new BuscarFecha();
        }
    }
 /**
  * lo que hace  es recibir el array de tareas y el parametro por el cual se quiere buscar ya se por fecha o titulo
  *  
  * 
  * @param t 
  * @param param
  * @returns tarea[]
  */

    public busqueda(t:Array<Tarea>, param:BuscadorParam):Tarea[] {
        this.busquedaSetter(param);
        return this.buscar.buscar(t, param);
    }
}