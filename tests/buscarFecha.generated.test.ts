import { Tarea } from "../src/clases/tarea";
import { BuscarFecha } from "../src/clases/buscarFecha";
import {mock} from 'jest-mock-extended'

describe('BuscarFecha', () => {
  let buscaFecha:BuscarFecha;
  let tarea = mock<Tarea>()
  let tarea2 = mock<Tarea>()
  let tarea3 = mock<Tarea>()
  let lista=Array()

  beforeEach(() => {
    buscaFecha = new BuscarFecha();
    tarea.getFechaVencimiento.mockReturnValue(new Date('2024-12-10'));
    tarea2.getFechaVencimiento.mockReturnValue(new Date('2025-01-9'));
    tarea3.getFechaVencimiento.mockReturnValue(new Date('2025-02-15'));
    lista=[tarea,tarea2,tarea3]
  });

  it('buscaFecha should be an instaceof BuscarFecha', () => {  
    expect(buscaFecha instanceof BuscarFecha).toBeTruthy();
  });

  it('Debe poder buscar una tarea por su fecha', () => {
    expect(buscaFecha.buscar(lista, { fecha: new Date('2024-12-10') })).toEqual([tarea]);
  });

  it('Si mas de una tarea tiene la misma fecha debe devolver todas las coincidencias.', () => {
    tarea2.getFechaVencimiento.mockReturnValue(new Date('2024-12-10'));
    expect(buscaFecha.buscar(lista, { fecha: new Date('2024-12-10') })).toEqual([tarea, tarea2]);
  });

  it('Si no se encuentra la fecha debe devolver un error.', () => {
    expect(() => buscaFecha.buscar(lista, { fecha: new Date('2024-12-17') })).toThrow();
  });
});