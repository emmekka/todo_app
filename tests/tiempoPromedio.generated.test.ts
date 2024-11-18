import { AlgoritmoTiempoPromedio } from "../src/interfaces/algoritmoTiempoPromedio";
import { Tarea } from "../src/clases/tarea";
import { TiempoPromedio } from "../src/clases/tiempoPromedio";
import {mock} from 'jest-mock-extended';

describe('TiempoPromedio', () => {
  let tiempin:AlgoritmoTiempoPromedio;
  let tarea = mock<Tarea>()
  let tarea2 = mock<Tarea>()
  let tarea3 = mock<Tarea>()
  let lista:Array<Tarea>;

  beforeEach(() => {
    tiempin = new TiempoPromedio();
    tarea.getTiempoDedicado.mockReturnValue(5);
    tarea2.getTiempoDedicado.mockReturnValue(10);
    tarea3.getTiempoDedicado.mockReturnValue(15);
    lista=[tarea,tarea2,tarea3];
  });

  it('Debe ser instancia de TiempoPromedio', () => {
    expect(tiempin instanceof TiempoPromedio).toBeTruthy();
  });

  it('Debe calcular el promedio de tiempo dedicado por tarea', () => {
    const tiempo=tiempin.calcularTiempoPromedio(lista);
    expect(tiempo).toBe(10);
  });
});