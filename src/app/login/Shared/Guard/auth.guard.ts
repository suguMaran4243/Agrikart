import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['login']);
      return false
    }
    return true;
  }
}
