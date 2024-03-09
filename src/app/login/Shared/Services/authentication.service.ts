import {Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable, map } from "rxjs";
import { Router } from "@angular/router";
@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthenticationService
{

   
      private userData='http://localhost:3000/users';

    

     
   
    constructor( private http :HttpClient,private router:Router)
    {
    
    }
    authenticate(username:string,password:string):Observable<boolean>
    {
        return this.http.get<any[]>(this.userData)
        .pipe(map(users=>
            {
                if(Array.isArray(users))
                {

                    const authencationUser=users.find(user=>user.username === username && user.password === password);
                    
                    if(authencationUser)
                    {
    
                        sessionStorage.setItem('myresponse',authencationUser.username)
                        return !! authencationUser;
                    }
                    else{
                        return false
                    }
            
                    
                }
                console.log("Hello")
                return false;
            }))
    }
    loggedIn()
    {
        return  sessionStorage.getItem('myresponse')
    }
    
    logout()
    {
        sessionStorage.removeItem('myresponse');
        this.router.navigate(['Login'])
    }
    

    
}