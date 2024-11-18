import { Tarea } from "../src/clases/tarea";
import { BuscarTitulo } from "../src/clases/buscarTitulo";
import {mock} from 'jest-mock-extended'

describe('BuscarTitulo', () => {
  let buscaTitulo:BuscarTitulo;
  let lista = new Array();
  let tarea1 = mock<Tarea>();
  let tarea2 = mock<Tarea>();
  let tarea3 = mock<Tarea>();

  beforeEach(() => {
    buscaTitulo = new BuscarTitulo();
    lista = [tarea1,tarea2, tarea3];
    tarea1.getTitulo.mockReturnValue("Terminar informe");
    tarea2.getTitulo.mockReturnValue("Llamar a Beto");
    tarea3.getTitulo.mockReturnValue("decorar la casa");
  });

  it('buscaTitulo should be an instaceof BuscarTitulo', () => {
    expect(buscaTitulo instanceof BuscarTitulo).toBeTruthy();
  });

  it('Debe poder buscar una tarea por su titulo', () => {
      expect(buscaTitulo.buscar(lista, { titulo: "decorar la casa" })).toEqual([tarea3]);
  });

  it('Si mas de una tarea tiene el mismo titulo debe devolver todas las coincidencias.', () => {
      tarea2.getTitulo.mockReturnValue("decorar la casa");
      expect(buscaTitulo.buscar(lista, { titulo: "decorar la casa" })).toEqual([tarea2,tarea3]);
  });

  it('Si no se encuentra el titulo debe devolver un error.', () => {
      expect(()=>buscaTitulo.buscar(lista, { titulo: "lalala" })).toThrow();
  });
});