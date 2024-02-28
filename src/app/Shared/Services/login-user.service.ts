import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root',
    }
)
export class LoginUserService
{

    loggedInuser:string='Welcome ';

    setLoggedInUser(username:string)
    {
       this.loggedInuser+=username;
    }
    getLoggedInUser():string
    {
         return this.loggedInuser
    }
}