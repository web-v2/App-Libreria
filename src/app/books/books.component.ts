import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from './books.services';
import { Books } from './books.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookNuevoComponent } from './book-nuevo.component';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  bookData: Books[] = [];

  desplegarColumnas = ["titulo", "description", "autor", "precio"];

  dataSource = new MatTableDataSource<Books>();

  @ViewChild(MatSort) ordenamiento: MatSort;
  @ViewChild(MatPaginator) pag: MatPaginator;

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  hacerFiltro(filtro: string) {
    this.dataSource.filter = filtro;
  }

  abrirDialog(){
    this.dialog.open(BookNuevoComponent);
  }
  ngOnInit(): void {
    //console.log(this.booksService.obtenerLibros()); 
    this.dataSource.data = this.booksService.obtenerLibros();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.pag;
  }
}
