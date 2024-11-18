import { FechaNoEncontrada } from '../src/errores/fechaNoEncontrada';

describe('FechaNoEncontrada', () => {
  let errorFecha: FechaNoEncontrada;

  beforeEach(() => {
    errorFecha = new FechaNoEncontrada();
  });

  it('Debe ser instancia de FechaNoEncontrada', () => {
    expect(errorFecha instanceof FechaNoEncontrada).toBeTruthy();
  });

  it('Debe devolver el mensaje de error correcto', () => {
      expect(errorFecha.message).toBe("No se encontro la fecha indicada.");
      expect(errorFecha.getMessage()).toBe(errorFecha.message);
  });
});