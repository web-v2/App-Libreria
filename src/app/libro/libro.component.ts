import { Component, Input, EventEmitter, Output } from '@angular/core';
import {LibrosService} from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})

export class LibroComponent {
  @Input() 'tituloLibro': string;
  @Output() libroClicked = new EventEmitter();

  constructor(private librosService: LibrosService){

  }
  onClicked(){
    //this.libroClicked.emit();
    this.librosService.eliminarLibro(this.tituloLibro);
  }
}
