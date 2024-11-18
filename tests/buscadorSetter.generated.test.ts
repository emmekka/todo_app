import { BuscarFecha } from "../src/clases/buscarFecha";
import { BuscarTitulo } from "../src/clases/buscarTitulo";
import { Tarea } from "../src/clases/tarea";
import { BuscadorSetter } from "../src/clases/buscadorSetter";
import { mock } from 'jest-mock-extended';

describe('BuscadorSetter', () => {
  let buscador: BuscadorSetter;
  let lista = new Array();
  let tarea1 = mock<Tarea>();
  let tarea2 = mock<Tarea>();
  let tarea3 = mock<Tarea>();

  beforeEach(() => {
    buscador = new BuscadorSetter();
    lista = [tarea1, tarea2, tarea3];
    tarea1.getTitulo.mockReturnValue("Terminar informe");
    tarea2.getTitulo.mockReturnValue("Llamar a Beto");
    tarea3.getTitulo.mockReturnValue("decorar la casa");
    tarea1.getFechaVencimiento.mockReturnValue(new Date('2024-12-10'));
    tarea2.getFechaVencimiento.mockReturnValue(new Date('2025-01-9'));
    tarea3.getFechaVencimiento.mockReturnValue(new Date('2025-02-15'));
  });

  it('Debe ser instancia de buscador BuscadorSetter', () => {
    expect(buscador instanceof BuscadorSetter).toBeTruthy();
  });

  it('Debe poder setear el algoritmo de busqueda dependiendo del parametro', () => {
    buscador['busquedaSetter']({titulo:"lalala"});
    expect(buscador['buscar']).toBeInstanceOf(BuscarTitulo);
    buscador['busquedaSetter']({ fecha: new Date() });
    expect(buscador['buscar']).toBeInstanceOf(BuscarFecha);
  });

  it('Debe poder buscar una tarea por titulo o fecha', () => {;
    expect(buscador.busqueda(lista, { titulo: "decorar la casa" })).toEqual([tarea3]);
    expect(buscador.busqueda(lista, { fecha: new Date('2024-12-10') })).toEqual([tarea1]);
  });

  it('En caso de que no encuentre la fecha o titulo debe tirar un error', () => { 
    expect(()=>buscador.busqueda(lista, { titulo: "lalala" })).toThrow();
    expect(()=>buscador.busqueda(lista, { fecha: new Date('2024-12-14') })).toThrow();
  });
});