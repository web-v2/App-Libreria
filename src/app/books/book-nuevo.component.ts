import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Autor } from '../autores/autor.model';
import { AutoresService } from '../autores/autores.service';
import { BooksService } from './books.service';

@Component({
    selector: 'app-book-nuevo',
    templateUrl: 'book-nuevo.component.html'
})

export class BookNuevoComponent implements OnInit{
    selectAutor: string;
    selectAutorTexto: string;
    fechaPublicacion: string;

    @ViewChild(MatDatepicker) picker: MatDatepicker<Date>;
    autores: Autor[] = [];
    
    
    constructor(private BookService: BooksService, private dialogref: MatDialog, private autoresService: AutoresService) { }

    ngOnInit(){
    //this.autores = this.autoresService.obtenerAutores();        
    }

    selected(event: MatSelectChange) {
        this.selectAutorTexto = (event.source.selected as MatOption).viewValue;
    }
    guardarLibro(form: NgForm) {
        if (form.valid) {
            this.BookService.guardarLibro({
                libroId: 1,
                description: form.value.descripcion,
                titulo: form.value.titulo,
                autor: this.selectAutorTexto,
                precio: form.value.precio,
                fechaPublicacion: new Date(this.fechaPublicacion)
            });
            this.dialogref.closeAll();
        }
    }

}