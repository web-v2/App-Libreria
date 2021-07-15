import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy {
  //libros = ['Matematicas I', 'Base de Datos I', 'Fisica I', 'Electronica II'];
  libros = [];
  constructor(private librosService: LibrosService){ }
  private libroSubscription: Subscription;

  eliminarLibro(libro) {
    //this.libros = this.libros.filter(p => p !== libro);
  }

  guardarLibro(f){
    ///console.log("Datos: ", f);
    if(f.valid){
      //this.libros.push(f.value.nombreLibro);
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(){
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(()=>{
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }
}
