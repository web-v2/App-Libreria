import { Component } from '@angular/core';

@Component({
  template: `<h1>Bienvenido al Curso de Angular</h1><br><li><a [routerLink]="['/books']">Books</a></li><br><li><a [routerLink]="['/autores']">Autores</a></li>`
})

export class InicioComponent{}
