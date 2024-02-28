import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable(
    {
        providedIn:'root'
    }
)
export class DataService{

    private jsonUrl='http://localhost:3000/users';
    constructor(private http:HttpClient)
    {

    }
    signUp(user:any):Observable<any>
    {
        return this.http.post(this.jsonUrl,user);
    }

}