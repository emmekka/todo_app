import { ProgresoIncorrecto } from "../src/errores/progresoIncorrecto";


describe('ProgresoIncorrecto', () => {
  let errorProgreso: ProgresoIncorrecto;

  beforeEach(() => {
    errorProgreso = new ProgresoIncorrecto();
  });

  it('Debe ser instancia de ProgresoIncorrecto', () => {
    expect(errorProgreso instanceof ProgresoIncorrecto).toBeTruthy();
  });

  it('Debe devolver el mensaje de error indicado', () => {
    expect(errorProgreso.message).toBe("El progreso debe ser un valor entre 0 y 100.");
    expect(errorProgreso.getMessage()).toBe(errorProgreso.message);
  });
});