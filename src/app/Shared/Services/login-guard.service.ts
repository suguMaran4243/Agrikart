import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "src/app/login/Shared/Services/authentication.service";

@Injectable()
export class LoginGuardService implements CanActivate

{

     constructor(private service:AuthenticationService,private router:Router)
     {

     }
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(this.service.isauthenticated())
        {
            return true;
        }
        else
        {
            alert("Please login to view the products!")
            this.router.navigate(['Login'])
            return false;
        }
         
     }
}