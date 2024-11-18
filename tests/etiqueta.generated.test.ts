import { Etiqueta } from "../src/clases/etiqueta";
import { Marcador } from "../src/interfaces/marcador";


describe('Etiqueta', () => {
  let etiqueta:Marcador;

  beforeEach(() => {
    etiqueta = new Etiqueta("lalala");
  });

  it('etiqueta debe ser instancia de Etiqueta', () => {
    expect(etiqueta instanceof Etiqueta).toBeTruthy();
  });

  it('Debe poder devolver su nombre', () => {
    expect(etiqueta.getNombre()).toBe("lalala");
  });
});