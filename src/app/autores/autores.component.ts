import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
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
export class AutoresComponent implements OnInit, OnDestroy {
  autorData: Autor[] = [];
  desplegarColumnas = ["nombre", "apellido", "gradoAcademico"];
  dataSource = new MatTableDataSource<Autor>();
  @ViewChild(MatSort) ordenamiento: MatSort;
  @ViewChild(MatPaginator) pag: MatPaginator;

  private autorSubscription: Subscription;

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
    this.autoresService.obtenerAutores();
    this.autorSubscription = this.autoresService
      .obtenerActualListener()
      .subscribe((autores: Autor[]) => {
        this.dataSource.data = autores;
      });
  }

  ngOnDestroy() {
    this.autorSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.pag;
  }
}
