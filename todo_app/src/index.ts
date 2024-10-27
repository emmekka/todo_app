import { Ordedar } from "./algoritmo/ordenar";
import { Prioridad } from "./enums/ePrioridad";
import { GestorTarea } from "./gestor/gestorTarea";
import { Tarea } from "./tarea.ts/tarea";


const ordenar = new Ordedar();


const gestor = new GestorTarea(ordenar);
const tarea1 = new Tarea("Tarea 1", new Date("2024-10-29"), Prioridad.Media)

gestor.agregarTarea(new Tarea("Tarea 5", new Date("2024-10-29"), Prioridad.Media));
gestor.agregarTarea(new Tarea("Tarea 2", new Date("2024-10-28"), Prioridad.Alta));
gestor.agregarTarea(new Tarea("Tarea 3", new Date("2024-10-30"), Prioridad.Baja));

console.log("Antes de ordenar:");
console.log(gestor);

gestor.ordenarTarea(t=>t.getPrioridad());

console.log("Después de ordenar por fecha de vencimiento:");
console.log(gestor);