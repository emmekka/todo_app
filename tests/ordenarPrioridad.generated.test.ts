import { Tarea } from "../src/clases/tarea";
import { OrdenPrioridad } from "../src/clases/ordenarPrioridad";
import {mock} from 'jest-mock-extended'
import { Prioridad } from "../src/enums/ePrioridad";

describe('OrdenPrioridad', () => {
  let prioridad:OrdenPrioridad;
  let tarea=mock<Tarea>()
  let tarea2=mock<Tarea>()
  let tarea3=mock<Tarea>()
  let tarea4=mock<Tarea>()
  let tarea5=mock<Tarea>()
  let lista=Array()

  beforeEach(() => {
    prioridad = new OrdenPrioridad();
    tarea.getPrioridad.mockReturnValue(Prioridad.BAJA);
    tarea2.getPrioridad.mockReturnValue(Prioridad.ALTA);
    tarea3.getPrioridad.mockReturnValue(Prioridad.MEDIA);
    lista=[tarea4, tarea2, tarea5, tarea3, tarea];
  });

  it('prioridad should be an prioridadof OrdenPrioridad', () => {
    expect(prioridad instanceof OrdenPrioridad).toBeTruthy();
  });

  it('should have a method ordenar()', () => {
    prioridad.ordenar(lista);
    expect(lista).toEqual([tarea2,tarea3,tarea,tarea4,tarea5]);
  });
});