import { EstadoTarea } from "../src/enums/eEstadoTarea";
import { AlgoritmoTasaFinalizacion } from "../src/interfaces/algoritmoTasaFinalizacion";
import { AlgoritmoTiempoPromedio } from "../src/interfaces/algoritmoTiempoPromedio";
import { Tarea } from "../src/clases/tarea";
import { Estadistica } from "../src/clases/estadistica";
import {mock} from 'jest-mock-extended';

describe('Estadistica', () => {
  let nerd:Estadistica
  let tiempin=mock<AlgoritmoTiempoPromedio>();
  let finishIt=mock<AlgoritmoTasaFinalizacion>();
  let tarea = mock<Tarea>()
  let tarea2 = mock<Tarea>()
  let tarea3 = mock<Tarea>()
  let tarea4 = mock<Tarea>()
  let lista: Array<Tarea>;

  beforeEach(() => {
    nerd = new Estadistica(finishIt,tiempin);
    tiempin.calcularTiempoPromedio.mockReturnValue(7);
    finishIt.calcularTasaFinalizacion.mockReturnValue(2);
    tarea.getEstado.mockReturnValue(EstadoTarea.COMPLETADA);
    tarea2.getEstado.mockReturnValue(EstadoTarea.COMPLETADA);
    tarea3.getEstado.mockReturnValue(EstadoTarea.PENDIENTE);
    tarea4.getEstado.mockReturnValue(EstadoTarea.PENDIENTE);
    lista = [tarea, tarea2, tarea3, tarea4];
  });

  it('Debe ser instancia de Estadistica', () => {
    expect(nerd instanceof Estadistica).toBeTruthy();
  });

  it('Debe poder calcular las estadisticas del listado tarea', () => {
    const resultado=nerd.calcularEstadisticas(lista);
    expect(resultado).toEqual({ 
    tareasCompletadas: [tarea, tarea2], 
    tareasPendientes: [tarea3, tarea4], 
    tasaFinalizacion: 2, 
    tiempoPromedio: 7 });
  });

  it('Debe dar un listado de tareas finalizadas', () => {
    const tareas=nerd.listadoTareasCompletas(lista);
    expect(tareas).toEqual([tarea, tarea2]);
  });

  it('Debe dar un listado de tareas pendientes', () => {
    const tareas=nerd.listadoTareasPendientes(lista);
    expect(tareas).toEqual([tarea3, tarea4]);
  });
});