import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookNuevoComponent } from './book-nuevo.component';
import { Subscription } from 'rxjs';
import { PaginationBooks } from './pagination-books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
  timeout: any = null;
  bookData: Books[] = [];
  desplegarColumnas = ["titulo", "description", "autor", "precio"];

  dataSource = new MatTableDataSource<Books>();

  @ViewChild(MatSort) ordenamiento: MatSort;
  @ViewChild(MatPaginator) pag: MatPaginator;

  private BookSubscription: Subscription;
  totalLibros = 0;
  librosPorPagina = 5;
  paginaCombo = [5, 10, 25, 50];
  paginaActual = 1;
  sort = 'titulo';
  sortDirection = 'ASC';
  filterValue = null;

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  eventoPaginador(event: PageEvent): void{
    this.librosPorPagina = event.pageSize;
    this.paginaActual = event.pageIndex + 1;
    this.booksService.obtenerLibros(this.librosPorPagina, this.paginaActual, this.sort, this.sortDirection, this.filterValue);
  }

  ordenarColumna(event): void {
    this.sort = event.active;
    this.sortDirection = event.direction;
    this.booksService.obtenerLibros(
      this.librosPorPagina,
      this.paginaActual,
      event.active,
      event.direction,
      this.filterValue
    );
  }

  hacerFiltro(event: any): void {
    clearTimeout(this.timeout);
    const $this = this;

    this.timeout = setTimeout(() => {
      if (event.keyCode !== 13) {
        const filterValueLocal = {
          propiedad: 'titulo',
          valor: event.target.value,
        };
        $this.filterValue = filterValueLocal;
        $this.booksService.obtenerLibros(
          $this.librosPorPagina,
          $this.paginaActual,
          $this.sort,
          $this.sortDirection,
          filterValueLocal
        );
      }
    }, 1000);
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(BookNuevoComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.booksService.obtenerLibros(
        this.librosPorPagina,
        this.paginaActual,
        this.sort,
        this.sortDirection,
        this.filterValue
      );
    });
  }

  ngOnInit(): void {
    this.booksService.obtenerLibros(
      this.librosPorPagina,
      this.paginaActual,
      this.sort,
      this.sortDirection,
      this.filterValue
    );
    this.BookSubscription = this.booksService
      .obtenerActualListener()
      .subscribe((pagination: PaginationBooks) => {
        this.dataSource = new MatTableDataSource<Books>(pagination.data);
        this.totalLibros = pagination.totalRows;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.pag;
  }

  ngOnDestroy(): void {
    this.BookSubscription.unsubscribe();
  }
}
