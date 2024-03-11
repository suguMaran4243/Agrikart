import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}
 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myresponse=sessionStorage.getItem('myresponse');
    console.log(myresponse)
    if(myresponse)
    {
      alert("Interceptor made")
      request=request.clone(
        {
          
         setHeaders:
         {
          Authorization:`Loggin ${myresponse}`,
          
         },
        }
      
      )
    }

    return next.handle(request);
  }
}
