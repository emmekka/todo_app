import { Tarea } from "../clases/tarea";

export interface AlgoritmoOrdenamiento {   
    ordenar(t:Array<Tarea>):void  
}