import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { BuscarFecha } from "./buscarFecha";
import { BuscarTitulo } from "./buscarTitulo";
import { Tarea } from "./tarea";

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

    public busqueda(t:Array<Tarea>, param:BuscadorParam):Tarea[] {
        this.busquedaSetter(param);
        return this.buscar.buscar(t, param);
    }
}