import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Shared/Services/dataservice.service';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit 
{
  signupForm:FormGroup;
  constructor(private service:DataService,private formBuilder:FormBuilder,private http:HttpClient)

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

  ngOnInit(): void {
     
  }
  submitForm()
  {
    const user=this.signupForm.value;
    const user_id=this.signupForm.get('userId').value;
    this.http.post('http://localhost:3000/users',user).subscribe((response)=>
    {
      console.log(response);
    });
  
  }
 
  


}
