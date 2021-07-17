import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridadServices: SeguridadService) { }

  ngOnInit(): void { }
  loginUsuario(form: NgForm){
    if (form.valid) {
      this.seguridadServices.loginUsuario({
        email: form.value.email,
        password: form.value.password    
      });
    }
    console.log(form.value.email)
    console.log(form.value.password)
  }
}
