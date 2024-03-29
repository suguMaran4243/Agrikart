import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  firstName: string;
  email: string;
  phoneNum: number;
  image: File;
  desc: string;

  constructor(private router: Router) {}

  /**
   * Check whether there is unsaved changes before allowing navigation
   * @returns {boolean}
   */
  canExit(): boolean {
    if (
      this.firstName ||
      this.email ||
      this.image ||
      this.phoneNum ||
      this.desc
    ) {
      return confirm('You have unsaved changes');
      alert('HI');
    } else {
      return true;
    }
  }
  /**
   * Navigates to the Home page using the router ['Home']
   * @returns{void}
   */

  public submitForm(): void {
    this.router.navigate(['home']);
  }
}
