import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service:AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule]
    });
    
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return null if user is not loggedin',()=>
  {
    spyOn(sessionStorage,'getItem').and.returnValue(null);
    const result=service.loggedIn();
    expect(result).toBeNull();
    expect(sessionStorage.getItem).toHaveBeenCalledWith('myresponse');
  })
  it('should return the logged in user from session storage',()=>
  {
    const mockResponse='dummy';
    spyOn(sessionStorage,'getItem').and.returnValue(mockResponse);
    const result=service.loggedIn();
    expect(result).toBe(mockResponse);
    expect(sessionStorage.getItem).toHaveBeenCalledWith('myresponse');
  })
 
  
  

});
