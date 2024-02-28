import { Inject, Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable, map } from "rxjs";
@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthenticationService
{
//    private userData='assets/user-data.json'
      private userData='http://localhost:3000/users';

      private isLoggedIn=false;
   
    constructor( private http :HttpClient)
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
                    console.log(authencationUser)
                    return !!authencationUser;
                }
                return false;
            }))
    }
    login()
    {
        this.isLoggedIn=true;
    }
    logout()
    {
        this.isLoggedIn=false
    }
    isauthenticated():boolean
    {
        return this.isLoggedIn
    }

    
}