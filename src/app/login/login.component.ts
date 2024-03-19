import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginForm: FormGroup;
  constructor(
    public authService: AuthenticationService,
    public router: Router
   
  ) {
   if( this.authService.loggedIn())
   {
    this.router.navigate(['home'])
   }
   
  }

  /**
   * This lifecycle hook is called after the component is initialized
   * Initializes the login form using the Angular's reactive forms approach
   * @returns {void}
   */
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
 /**
  * Initiates the login process by extracting the username and password from the login form
  * Calls the authenticate method from authentication service to verify credentials
  * Display alert based on the result
  * @returns {void}
  */
  Login() :void {

    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    this.authService
      .authenticate(this.username, this.password)
      .subscribe((authenticated: any) => {
        if (authenticated) {
          alert('login successfull');
          this.router.navigate(['home']);
        } else {
          alert('Please signup before login');
          this.router.navigate(['signup']);
        }
      });
   
  }
  /**
   * Navigates to the Signup page using the router ['Signup]
   * @returns {void}
   */
  navigateToSignup() :void {
    this.router.navigate(['signup']);
  }
}
