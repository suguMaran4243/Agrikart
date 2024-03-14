import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  signUp(user: string) {
    return this.http.post(this.jsonUrl, user);
  }
}
