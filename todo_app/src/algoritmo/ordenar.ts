import { Prioridad } from "../enums/ePrioridad";
import { Tarea } from "../tarea.ts/tarea";

export class Ordedar {
    
    public ordenar(t:Array<Tarea>, selector: (t: Tarea) => string | Date | Prioridad) {
        t.sort((a, b) => {
            const valorA = selector(a);
            const valorB = selector(b);

            if (typeof valorA === "string" && typeof valorB === "string") {
                return valorA.localeCompare(valorB);
            } else if (valorA instanceof Date && valorB instanceof Date) {
                return valorA.getTime() - valorB.getTime();
            } else if (typeof valorA === "number" && typeof valorB === "number") {
                return valorA - valorB;
            }
            return 0;
        });
    }
    
}