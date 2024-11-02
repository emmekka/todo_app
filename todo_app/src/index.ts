import { Ordedar } from "./interfaces/ordenar";
import { Categoria } from "./enums/eCategoria";
import { Prioridad } from "./enums/ePrioridad";
import { GestorTarea } from "./gestor/gestorTarea";
import { Tarea } from "./clases/tarea";


const ordenar = new Ordedar();
const gestor = new GestorTarea(ordenar);
const tarea1 = new Tarea(1,Categoria.PERSONAL)
const tarea2=new Tarea(2, Categoria.Recados)
const tarea3 = new Tarea(3, Categoria.TRABAJO)
gestor.agregarTarea(tarea1);
gestor.agregarTarea(tarea2);
gestor.agregarTarea(tarea3);

//console.log("Antes de ordenar:");
//console.log(gestor);

gestor.ordenarTarea(t=>t.getPrioridad());

tarea1.editarTarea({progreso: 100 })
console.log(tarea1.getProgreso(), tarea1.getEstado())
//console.log(gestor);