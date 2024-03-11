import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Shared/Services/dataservice.service';
import { Router } from '@angular/router';
import {environment} from  '../../../environments/environment';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(
    private service: DataService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    console.log('signup');
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      userId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      user: ['', Validators.required],
      village: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });
  }
  apiUrl:string=environment.apiBase

  /**
   * Submits the signup form to the json server using post request
   * Sets headers for the HTTP request to accept json
   * Retrives user data  from the signup form
   * Navigates to the 'Login' after signup using the router
   * @returns {void}
   */

  submitForm() :void{
    console.log('hi');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    const user = this.signupForm.value;
    this.http
      .post(`${this.apiUrl}/users`, user, { headers })
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate(['./Login']);
  }
}

