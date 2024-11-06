import { Categoria } from "../src/enums/eCategoria";
import { Etiqueta } from "../src/clases/etiqueta";
import { mock } from 'jest-mock-extended';
import { Tarea } from "../src/clases/tarea";


describe('Tarea', () => {
    let tarea: Tarea;
    let etiqueta = mock<Etiqueta>();
    let etiqueta2 = mock<Etiqueta>();

    beforeEach(() => {
        tarea = new Tarea(1, Categoria.TRABAJO);
        tarea['titulo'] = "tarea 1";
        tarea['descripcion'] = "loca loca";
        etiqueta.getNombre.mockReturnValue("trabajoso");
        etiqueta2.getNombre.mockReturnValue("calooor");
    });

    it('Debe poder devolver el Id', () => {
        expect(tarea.getId()).toBe(1);
    });

    it('Debe poder devolver el Titulo', () => {
        expect(tarea.getTitulo()).toBe("tarea 1");
    });

    it('Debe poder devolver la descripcion', () => {
        expect(tarea.getDescripcion()).toBe("loca loca");
    });

    it('Debe poder devolver la vecha de vencimiento', () => {
        tarea['fechaVencimiento'] = new Date(2025, 2);
        expect(tarea.getFechaVencimiento()?.getFullYear()).toBe(2025);
    });

    it('Si no hay fecha de vencimiento debe devovler undefined', () => {
        expect(tarea.getFechaVencimiento()).toBe(undefined);
    })

    it('Debe poder devolver el nivel de Prioridad', () => {
        /* Prioridad 0 es alta, 1 es media, 2 es baja.
        Por defecto la prioridad es 2 */
        expect(tarea.getPrioridad()).toBe(2);
    });

    it('Debe poder devolver el estado', () => {
        //Por defecto el estado es pendiente.
        expect(tarea.getEstado()).toBe("Pendiente");
    });

    it('Debe poder devolver el progreso', () => {
        //Por defecto el progreso es 0.
        expect(tarea.getProgreso()).toBe(0);
    });

    it('Debe poder devolver la categoria', () => {
        expect(tarea.getCategoria()).toBe("Trabajo");
    });

    it('Debe poder devolver el tiempo dedicado', () => {
        //Por defecto el tiempo dedicado es 0;
        expect(tarea.getTiempoDedicado()).toBe(0);
    });

    it('Debe poder editar solo los campos elegidos de las tareas', () => {
        tarea.editarTarea({titulo: "tarea dificil"});
        expect(tarea.getTitulo()).toBe("tarea dificil");
        expect(tarea.getDescripcion()).toBe("loca loca");
    });

    it('Si el progreso de la tarea es editado a 100 el estado debe ser cambiado a completado', () => {
        tarea.editarTarea({ progreso: 100 });
        tarea.tareaCompleta();
        expect(tarea.getProgreso()).toBe(100);
        expect(tarea.getEstado()).toBe("Completada");
    });

    it('Debe poder agregar etiquetas', () => {
        tarea.agregarEtiqueta(etiqueta);
        tarea.agregarEtiqueta(etiqueta2);
        expect(tarea.getEtiquetas().length).toBe(2);
    });

    it('Debe poder devolver las Etiquetas', () => {
        tarea.agregarEtiqueta(etiqueta);
        tarea.agregarEtiqueta(etiqueta2);
        expect(tarea.getEtiquetas()).toEqual([etiqueta, etiqueta2]);
    });
});