import { Prioridad } from "../enums/ePrioridad";

export interface EditarTareaParam {
    titulo?:string;
    descripcion?:string;
    fechaVencimiento?:Date;
    prioridad?:Prioridad;
    progreso?:number;
    tiempoDedicado?:number;
}