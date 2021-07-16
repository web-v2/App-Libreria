import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookNuevoComponent } from './book-nuevo.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
  bookData: Books[] = [];

  desplegarColumnas = ["titulo", "description", "autor", "precio"];

  dataSource = new MatTableDataSource<Books>();

  @ViewChild(MatSort) ordenamiento: MatSort;
  @ViewChild(MatPaginator) pag: MatPaginator;

  private BookSubscription: Subscription;

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  hacerFiltro(filtro: string) {
    this.dataSource.filter = filtro;
  }

  abrirDialog(){
    this.dialog.open(BookNuevoComponent,{
      width: '350px'
    });
  }
  ngOnInit(): void {    
    this.dataSource.data = this.booksService.obtenerLibros();
    this.BookSubscription = this.booksService.bookSuject.subscribe(()=> {
      this.dataSource.data = this.booksService.obtenerLibros();
    })
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.pag;
  }

  ngOnDestroy(){
    this.BookSubscription.unsubscribe();
  }
}
