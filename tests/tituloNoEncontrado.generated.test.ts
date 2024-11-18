import { TituloNoEncontrado } from '../src/errores/tituloNoEncontrado';

describe('TituloNoEncontrado', () => {
  let faltaTitulo:TituloNoEncontrado;

  beforeEach(() => {
    faltaTitulo = new TituloNoEncontrado();
  });

  it('Debe ser instancia de TituloNoEncontrado', () => {
    expect(faltaTitulo instanceof TituloNoEncontrado).toBeTruthy();
  });

  it('Debe devolver el mensaje indicado', () => {
      expect(faltaTitulo.message).toBe("No se encontro el titulo buscado.");
      expect(faltaTitulo.getMessage()).toBe(faltaTitulo.message);
  });
});