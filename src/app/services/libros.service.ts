import { Subject } from 'rxjs';

export class LibrosService{
  librosSubject = new Subject();
  private libros = ['Matematicas I', 'Base de Datos I', 'Fisica I'];

  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(i => i !== libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros(){
    return [...this.libros];
  }

}
