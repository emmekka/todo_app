import { Tarea } from "./tarea";
import { EstadoTarea } from "../enums/eEstadoTarea";

export default class estadidsticas {
    private tareascompletas:number;
    private tareasincompletas:number;
    private  tiempoCompleto:number;
    private tiempoTotal:number
    
    constructor() {
     this.tareascompletas=0;
     this.tareasincompletas=0;
     this.tiempoCompleto=0
     this.tiempoTotal=0;
    }

 public calcularEstadisticas(tareas:Tarea):void{
   //supongo que tendrai que recibir el array de tarea y revisar uno por uno pero lo dejo asi para revisar despues
    const Porcentaje= tareas.getEstado()
     
   if(Porcentaje != EstadoTarea.COMPLETADA){
     const Tiempo= tareas.getTiempoDedicado();

    this.tareasincompletas++
    this.tiempoCompleto += Tiempo;

   } else {
     this.tareascompletas++
     this.tiempoTotal=this.tiempoCompleto


   }
    
     }
    
 

}