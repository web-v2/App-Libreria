import { Component, OnInit } from '@angular/core';
import { SeguridadService } from './seguridad/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-web-app';
  abrirMenu=false;
  constructor(private seguridadServ: SeguridadService){}

  ngOnInit(): void{
    this.seguridadServ.cargarUsuario();
  }

}
