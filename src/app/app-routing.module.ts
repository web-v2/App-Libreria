import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { SeguridadRouter } from './seguridad/seguridad.router';
import { AutoresComponent } from './autores/autores.component';
//, canActivate: [SeguridadRouter]
const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [SeguridadRouter] },
  { path: 'dashboard', component: InicioComponent, canActivate: [SeguridadRouter]},
  { path: 'libros', component: LibrosComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent, canActivate: [SeguridadRouter] },
  { path: 'autores', component: AutoresComponent, canActivate: [SeguridadRouter] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadRouter]
})
export class AppRoutingModule { }
