import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName:string;
  email:string;
  phoneNum:number;
 image:File;
 desc:string;

  constructor(private router:Router)
  {
     console.log("Contact")
  }

  canExit()
  {
    if(this.firstName || this.email || this.image || this.phoneNum ||this.desc)
    {
     return confirm('You have unsaved changes');
     alert('HI')
    }
    else
    {
      return true;
    }
  }
  navigatetoHome()
  {
    this.router.navigate(['Home'])
  }


}
