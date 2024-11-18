import { Tarea } from "../src/clases/tarea";
import { OrdenFecha } from "../src/clases/ordenarFecha";
import {mock} from 'jest-mock-extended'

describe('OrdenFecha', () => {
  let fecha:OrdenFecha;
  let tarea=mock<Tarea>()
  let tarea2=mock<Tarea>()
  let tarea3=mock<Tarea>()
  let tarea4=mock<Tarea>()
  let tarea5 = mock<Tarea>()
  let lista=Array()

  beforeEach(() => {
    fecha = new OrdenFecha();
    tarea.getFechaVencimiento.mockReturnValue(new Date('2024-12-10'));
    tarea2.getFechaVencimiento.mockReturnValue(new Date('2025-01-9'));
    tarea3.getFechaVencimiento.mockReturnValue(new Date('2025-02-15'));
    lista=[tarea4,tarea2,tarea5,tarea3,tarea];
  });

  it('Fecha should be an instanceof OrdenFecha', () => {
    expect(fecha instanceof OrdenFecha).toBeTruthy();
  });

  it('Debe poder ordenar una lista de tareas por fecha', () => {
      //Si no tiene fecha definida (caso tarea4 y 5), las mismas deben quedar al final.
      fecha.ordenar(lista);
      expect(lista).toStrictEqual([tarea, tarea2, tarea3, tarea4, tarea5]);
  });
});