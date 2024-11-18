import { Categoria } from "../enums/eCategoria";
import { EstadoTarea } from "../enums/eEstadoTarea";
import { Prioridad } from "../enums/ePrioridad"
import { ProgresoIncorrecto } from "../errores/progresoIncorrecto";
import { EditarTareaParam } from "../interfaces/editParam";
import { Marcador } from "../interfaces/marcador";

export class Tarea {
    private static contadorId: number=0;
    private id:number;
    private titulo: string;
    private descripcion:string;
    private fechaVencimiento?:Date;
    private prioridad:Prioridad;
    private estado:EstadoTarea;
    private progreso:number;
    private categoria:Categoria;
    private marcador:Array<Marcador>;
    private tiempoDedicado:number;

    constructor(catego:Categoria) {
        Tarea.contadorId++;
        this.titulo="documento sin titulo";
        this.descripcion="";
        this.prioridad=Prioridad.BAJA;
        this.id=Tarea.contadorId;
        this.estado=EstadoTarea.PENDIENTE;
        this.progreso=0;
        this.categoria=catego;
        this.marcador=[];
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

    public getMarcador():Array<Marcador> {
        return this.marcador;
    }

    public getTiempoDedicado():number {
        return this.tiempoDedicado;
    }

    private setProgreso(p:number):void {
        if (p < 0 || p > 100) {
            throw new ProgresoIncorrecto;
        }
        this.progreso=p;
    }

    public editarTarea(params: EditarTareaParam): void {
        this.titulo = params.titulo ?? this.titulo;
        this.descripcion=params.descripcion ?? this.descripcion;
        this.fechaVencimiento = params.fechaVencimiento ?? this.fechaVencimiento;
        this.prioridad= params.prioridad ?? this.prioridad;
        this.tiempoDedicado=params.tiempoDedicado ?? this.tiempoDedicado;
        this.setProgreso(params.progreso ?? this.progreso);
        this.tareaCompleta();
    }
    
    public tareaCompleta():void {
        if (this.progreso === 100) {
            this.estado = EstadoTarea.COMPLETADA;
        }
    }

    public agregarMarcador(e:Marcador):void{
        this.marcador.push(e);
    }
}