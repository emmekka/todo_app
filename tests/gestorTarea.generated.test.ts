import { Categoria } from "../src/enums/eCategoria";
import { AlgoritmoOrdenamiento } from "../src/interfaces/ordenar";
import { BuscadorSetter } from "../src/clases/buscadorSetter";
import { Estadistica } from "../src/clases/estadistica";
import { Tarea } from "../src/clases/tarea";
import { GestorTarea } from "../src/clases/gestorTarea";
import {mock} from 'jest-mock-extended'

describe('GestorTarea', () => {
  let gestorando:GestorTarea;
  let nerd=mock<Estadistica>();
  let ordenador=mock<AlgoritmoOrdenamiento>();
  let tarea = mock<Tarea>();
  let tarea2 = mock<Tarea>();
  let tarea3 = mock<Tarea>();
  let tarea4 = mock<Tarea>();
  let buscador= mock<BuscadorSetter>();

  beforeEach(() => {
    gestorando = new GestorTarea();
    buscador.busqueda.mockReturnValue([tarea2])
    ordenador.ordenar.mockImplementation((array: Tarea[]) => {
    Object.assign(array, [tarea3, tarea2, tarea, tarea4]);
    });
    nerd.calcularEstadisticas.mockReturnValue({
    tareasCompletadas: [tarea, tarea2],
    tareasPendientes: [tarea3, tarea4],
    tasaFinalizacion: 2,
    tiempoPromedio: 7
    });
  });

  it('Debe ser instancia de GestorTarea', () => {
    expect(gestorando instanceof GestorTarea).toBeTruthy();
  });

  it('Debe poder crear una tarea', () => {
    const tareaTest=gestorando.crearTarea(Categoria.RECADOS);
    expect(tareaTest instanceof Tarea).toBeTruthy();
  });

  it('Debe devolver un array de tareas', () => {
    const lista = [tarea, tarea2, tarea3, tarea4]
    gestorando['tarea']=[tarea,tarea2,tarea3,tarea4]
    expect(gestorando.getTareas()).toStrictEqual(lista);
  });

  it('Debe poder agregar tareas al array', () => {
    gestorando.agregarTarea(tarea);
    expect(gestorando['tarea']).toStrictEqual([tarea]);
  });

  it('Debe poder eliminar una tarea especifica del array', () => {
    const lista= [tarea,tarea3,tarea4]
    gestorando['tarea'] = [tarea, tarea2, tarea3, tarea4]
    gestorando.eliminarTarea(tarea2)
    expect(gestorando['tarea']).toEqual(lista);
  });

  it('Debe devolver las estadisticas correctas', () => {
    expect(gestorando.obtenerEstadisticas(nerd)).toEqual({
    tareasCompletadas: [tarea, tarea2],
    tareasPendientes: [tarea3, tarea4],
    tasaFinalizacion: 2,
    tiempoPromedio: 7
    });
  });

  it('Debe poder ordenar la lista de tareas', () => {
    const lista=gestorando['tarea'] = [tarea2, tarea4, tarea3, tarea]
    gestorando.ordenarTarea(ordenador);
    expect(lista).toEqual([tarea3, tarea2, tarea, tarea4]);
  });

  it('Debe poder buscar una tarea', () => {
    gestorando['tarea'] = [tarea2, tarea4, tarea3, tarea]
    expect(gestorando.buscarTarea(buscador, {})).toEqual([tarea2]);
  });
});