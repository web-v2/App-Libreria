import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../seguridad/seguridad.service';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  estadoUsuario: boolean;
  usuarioSubscription: Subscription;
  constructor(private seguridadServ: SeguridadService) { }

  ngOnInit(): void {
    this.usuarioSubscription = this.seguridadServ.seguridadCambio.subscribe(status => {
      this.estadoUsuario = status;
    });
  }
  onCerrarMenu(){
    this.menuToggle.emit();
  }
  terminarSesionMenu(){
    this.onCerrarMenu();
    this.seguridadServ.salirSesion();
  }
  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe();
  }
}
