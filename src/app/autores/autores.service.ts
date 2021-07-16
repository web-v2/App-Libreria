import { Injectable } from '@angular/core';
import { Autor } from './autor.model';

@Injectable({ 
    providedIn: 'root'
 })
export class AutoresService {
    private autoresLista: Autor[] = [
        { autorId: 1, nombre: 'Vaxi', apellido: 'dres', gradoAcademico: 'Ing Soft' },
        { autorId: 2, nombre: 'Samir', apellido: 'Vergara', gradoAcademico: 'Ing Soft' },
        { autorId: 3, nombre: 'Fernando', apellido: 'Herrera', gradoAcademico: 'DevOps' },
        { autorId: 4, nombre: 'Carlos', apellido: 'Azaustre', gradoAcademico: 'Creador Digital' },
        { autorId: 5, nombre: 'Maria', apellido: 'Romero', gradoAcademico: 'Full Stack' }
    ];

    obtenerAutores(){
        return this.autoresLista.slice();
    }
}