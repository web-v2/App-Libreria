import {Component} from '@angular/core';

@Component({
    selector: 'app-book-nuevo',
    template: `<h1 mat-dialog-title>Dialog para agregar Nuevo Libro</h1><mat-dialog-actions><button mat-button [mat-dialog-close]='true'>Cerrar</button></mat-dialog-actions>`
})

export class BookNuevoComponent {}