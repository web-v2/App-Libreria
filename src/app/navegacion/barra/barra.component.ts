import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';
import { SeguridadService } from '../../seguridad/seguridad.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {
@Output() menuToggle = new EventEmitter<void>();
constructor(private seguridadServ: SeguridadService) { }
  estadoUsuario: boolean;
  usuarioSubscription: Subscription;

  ngOnInit(): void {
    this.usuarioSubscription = this.seguridadServ.seguridadCambio.subscribe(status => {
      this.estadoUsuario = status;
    });
  }
  onMenuToggleDispath(){
    this.menuToggle.emit();
  }

  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe();
  }

  cerrarSesion(){
    this.seguridadServ.salirSesion();
  }
}
