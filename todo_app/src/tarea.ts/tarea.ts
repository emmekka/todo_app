import { Prioridad } from "../enums/ePrioridad"

export class Tarea {
    private titulo: string
    private fechaVencimiento:Date
    private prioridad:Prioridad

    constructor(titulo: string, fechaVencimiento: Date, prioridad: Prioridad) {
        this.titulo=titulo;
        this.fechaVencimiento=fechaVencimiento;
        this.prioridad=prioridad;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getFechaVencimiento(): Date {
        return this.fechaVencimiento;
    }

    public setFechaVencimiento(fechaVencimiento: Date): void {
        this.fechaVencimiento = fechaVencimiento;
    }

    public getPrioridad(): Prioridad {
        return this.prioridad;
    }

    public setPrioridad(prioridad: Prioridad): void {
        this.prioridad = prioridad;
    }

}