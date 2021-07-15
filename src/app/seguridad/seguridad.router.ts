import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SeguridadService } from "./seguridad.service";

@Injectable()
export class SeguridadRouter implements CanActivate {
  constructor(private seguridadService: SeguridadService, private router:Router){}
canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
      let res = false;
      if(this.seguridadService.onSesion){
        res = true;
      }else{             
        this.router.navigate(['/login'])
      }
    return res;
  }
}
