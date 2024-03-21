import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userData: string = environment.apiBase;

  constructor(private http: HttpClient, private router: Router) {}
  /**
   * This method will authenticate with the json server and check whether username and password are correct
   * @param username
   * @param password
   * @returns {boolean}
   */
  authenticate(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.userData}/users`).pipe(
      map((users) => {
        if (Array.isArray(users)) {
          const authencationUser = users.find(
            (user) => user.username === username && user.password === password
          );

          if (authencationUser) {
            sessionStorage.setItem('myresponse', authencationUser.username);
            return !!authencationUser;
          } else {
            return false;
          }
        }
        console.log('Hello');
        return false;
      })
    );
  }
  /**
   * This method will check whether the user is logged in or not if loggedin it returns the usernname
   * @returns
   */
  loggedIn() {
    return sessionStorage.getItem('myresponse');
  }

  logout() {
    sessionStorage.removeItem('myresponse');
    this.router.navigate(['login']);
  }
}
