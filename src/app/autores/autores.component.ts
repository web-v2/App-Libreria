import { Component, OnInit, ViewChild } from '@angular/core';
import { AutoresService } from './autores.service';
import { Autor } from './autor.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
//import { BookNuevoComponent } from './book-nuevo.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autorData: Autor[] = [];
  desplegarColumnas = ["nombre", "apellido", "gradoAcademico"];
  dataSource = new MatTableDataSource<Autor>();
  @ViewChild(MatSort) ordenamiento: MatSort;
  @ViewChild(MatPaginator) pag: MatPaginator;

  constructor(private autoresService: AutoresService, private dialog: MatDialog) { }
  hacerFiltro(filtro: string) {
    this.dataSource.filter = filtro;
  }

  abrirDialog() {
    /*this.dialog.open(BookNuevoComponent, {
      width: '350px'
    });*/
  }
  ngOnInit(): void {
    this.dataSource.data = this.autoresService.obtenerAutores();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.pag;
  }
}
