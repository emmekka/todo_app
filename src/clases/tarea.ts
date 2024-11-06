import { Categoria } from "../enums/eCategoria";
import { EstadoTarea } from "../enums/eEstadoTarea";
import { Prioridad } from "../enums/ePrioridad"
import { EditarTareaParam } from "../interfaces/editParam";
import { Etiqueta } from "./etiqueta";

export class Tarea {
    private id:number;
    private titulo: string;
    private descripcion:string
    private fechaVencimiento?:Date
    private prioridad:Prioridad;
    private estado:EstadoTarea;
    private progreso:number;
    private categoria:Categoria;
    private etiqueta:Array<Etiqueta>;
    private tiempoDedicado:number;

    constructor(id:number,catego:Categoria) {
        this.titulo="";
        this.descripcion="";
        this.prioridad=Prioridad.BAJA;
        this.id=id;
        this.estado=EstadoTarea.PENDIENTE;
        this.progreso=0;
        this.categoria=catego;
        this.etiqueta=[];
        this.tiempoDedicado=0;
    }

    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getFechaVencimiento(): Date | undefined{
        return this.fechaVencimiento??undefined;
    }

    public getPrioridad(): Prioridad {
        return this.prioridad;
    }

    public getEstado():string {
        return this.estado;
    }

    public getProgreso():number {
        return this.progreso;
    }

    public getCategoria():string {
        return this.categoria;
    }

    public getEtiquetas():Array<Etiqueta> {
        return this.etiqueta;
    }

    public getTiempoDedicado():number {
        return this.tiempoDedicado;
    }

    public editarTarea(params: EditarTareaParam): void {
        this.titulo = params.titulo ?? this.titulo;
        this.descripcion=params.descripcion ?? this.descripcion;
        this.fechaVencimiento = params.fechaVencimiento ?? this.fechaVencimiento;
        this.prioridad= params.prioridad ?? this.prioridad;
        this.tiempoDedicado=params.tiempoDedicado ?? this.tiempoDedicado;
        this.progreso=params.progreso ?? this.progreso;
        this.tareaCompleta();
    }
    
    public tareaCompleta() {
        if (this.progreso === 100) {
            this.estado = EstadoTarea.COMPLETADA;
        }
    }

    public agregarEtiqueta(e:Etiqueta):void{
        this.etiqueta.push(e);
    }
}