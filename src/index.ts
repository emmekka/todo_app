import { Categoria } from "./enums/eCategoria";
import { GestorTarea } from "./clases/gestorTarea";
import { Tarea } from "./clases/tarea";
import { OrdenPrioridad } from "./clases/ordenarPrioridad";
import { Prioridad } from "./enums/ePrioridad";
import { BuscarTitulo } from "./clases/buscarTitulo";
import { Estadistica } from "./clases/estadistica";


const buscarTitulo= new BuscarTitulo()
const ordenar = new OrdenPrioridad();
const estadistica= new Estadistica();
const gestor = new GestorTarea();
const tarea1 = gestor.crearTarea(1, Categoria.PERSONAL)
const tarea2=gestor.crearTarea(2, Categoria.Recados)
const tarea3 = gestor.crearTarea(3, Categoria.TRABAJO)

tarea1.editarTarea({ prioridad: Prioridad.ALTA,progreso:100,tiempoDedicado:3 })
tarea1.editarTarea({ titulo:"lalala" })
tarea2.editarTarea({ prioridad: Prioridad.BAJA, tiempoDedicado:1 })
tarea3.editarTarea({ prioridad: Prioridad.MEDIA, tiempoDedicado:2 })


//console.log(gestor.obtenerEstadisticas(estadistica))
//console.log("Antes de ordenar:");
//console.log(gestor);
console.log(gestor.buscarTarea(buscarTitulo, {titulo: "lalala"}))

//gestor.ordenarTarea(ordenar);
//console.log(tarea1.getProgreso(), tarea1.getEstado())
//console.log(gestor);