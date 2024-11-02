import { Categoria } from "./enums/eCategoria";
import { GestorTarea } from "./clases/gestorTarea";
import { Tarea } from "./clases/tarea";
import { OrdenPrioridad } from "./clases/ordenarPrioridad";
import { Prioridad } from "./enums/ePrioridad";
import { BuscarTitulo } from "./clases/buscarTitulo";


const buscarTitulo= new BuscarTitulo()
const ordenar = new OrdenPrioridad();
const gestor = new GestorTarea();
const tarea1 = new Tarea(1,Categoria.PERSONAL)
const tarea2=new Tarea(2, Categoria.Recados)
const tarea3 = new Tarea(3, Categoria.TRABAJO)
gestor.agregarTarea(tarea1);
gestor.agregarTarea(tarea2);
gestor.agregarTarea(tarea3);
tarea1.editarTarea({ prioridad: Prioridad.ALTA })
tarea1.editarTarea({ titulo:"lalala" })
tarea2.editarTarea({ prioridad: Prioridad.BAJA })
tarea3.editarTarea({ prioridad: Prioridad.MEDIA })
console.log("Antes de ordenar:");
//console.log(gestor);
console.log(gestor.buscarTarea(buscarTitulo, {titulo: "pepe"}))



//gestor.ordenarTarea(ordenar);
//console.log(tarea1.getProgreso(), tarea1.getEstado())
//console.log(gestor);