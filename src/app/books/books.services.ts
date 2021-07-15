import { Books } from './books.model';
export class BooksService {

    private booksLista: Books[] = [
        { libroId: 1, titulo: 'Algoritms', description: 'Ing System', precio: 18000, autor: 'Vaxi L' },
        { libroId: 2, titulo: 'NodeJs', description: 'Back-end', precio: 25300, autor: 'Samir V2' },
        { libroId: 3, titulo: 'POO', description: 'Prog Object', precio: 19500, autor: 'Vaxi D' },
        { libroId: 4, titulo: 'Bases de Datos', description: 'Datasource', precio: 16500, autor: 'Juana Perez' },
        { libroId: 5, titulo: 'Testing App', description: 'Auditoria Web', precio: 22500, autor: 'Carlos Azaustre' }
    ];

    obtenerLibros() {
        return this.booksLista.slice();
    }
}