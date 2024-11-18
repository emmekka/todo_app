import { AlgoritmoTasaFinalizacion } from "../src/interfaces/algoritmoTasaFinalizacion";
import { Estadistica } from "../src/clases/estadistica";
import { Tarea } from "../src/clases/tarea";
import { TasaFinalizacion } from "../src/clases/tasaFinalizacion";
import {mock} from 'jest-mock-extended';

describe('TasaFinalizacion', () => {
  let finishIt:AlgoritmoTasaFinalizacion;
  let nerd=mock<Estadistica>()
  let tarea = mock<Tarea>()
  let tarea2 = mock<Tarea>()
  let tarea3 = mock<Tarea>()
  let lista: Array<Tarea>;

  beforeEach(() => {
    finishIt = new TasaFinalizacion();
    nerd.listadoTareasCompletas.mockReturnValue([tarea, tarea2])
    lista = [tarea, tarea2, tarea3];
  });

  it('Debe ser instancia de TasaFinalizacion', () => {
    expect(finishIt instanceof TasaFinalizacion).toBeTruthy();
  });

  it('Debe pdoer calcular la tasa de finalizacion de tareas', () => {
    const terminadas=finishIt.calcularTasaFinalizacion(lista,nerd);
    expect(terminadas).toBe(66.67);
  });
});