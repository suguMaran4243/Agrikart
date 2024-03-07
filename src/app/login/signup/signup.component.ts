import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../Shared/Services/dataservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent 
{
  signupForm:FormGroup;
  constructor(private service:DataService,private formBuilder:FormBuilder,private http:HttpClient,private router:Router)

  {
console.log("signup");
this.signupForm=this.formBuilder.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  gender:['',Validators.required],
  userId:['',Validators.required],
  username:['',Validators.required],
  password:['',Validators.required],
  phoneNumber:['',Validators.required],
  user:['',Validators.required],
  village:['',Validators.required],
  city:['',Validators.required],
  pin:['',Validators.required],
  state:['',Validators.required],
  country:['',Validators.required],
})

  }

  
  submitForm()
  {
    console.log("hi")
    let headers:HttpHeaders=new HttpHeaders();
    headers=headers.set('Accept','application/json');
    const user=this.signupForm.value;
    this.http.post('http://localhost:3000/users',user,{headers}).subscribe((response)=>
    {
      console.log(response);
   
      
    
    });
    this.router.navigate(['./Login'])
  
  }
  
 
  


}
