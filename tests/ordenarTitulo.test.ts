import { mock } from 'jest-mock-extended';
import { Tarea } from "../src/clases/tarea";
import { OrdenTitulo } from "../src/clases/ordenarTitulo";

describe('OrdenarTitulo', () => {
    let ordenador = new OrdenTitulo();
    let lista = new Array();
    let tarea1 = mock<Tarea>();
    let tarea2 = mock<Tarea>();
    let tarea3 = mock<Tarea>();

    beforeEach(() => {
        lista = [tarea1, tarea2, tarea3];
        tarea1.getTitulo.mockReturnValue("Terminar informe");
        tarea2.getTitulo.mockReturnValue("Llamar a Beto");
        tarea3.getTitulo.mockReturnValue("decorar la casa");
    });

    it('Debe poder devolver el array ordenado alfabeticamente', () => {
        ordenador.ordenar(lista);
        expect(lista).toEqual([tarea3, tarea2, tarea1]);
    });

});