import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post('https://ninja-boilerplate.herokuapp.com/v1/api/user/login', { email: email, password: password })
  }
  register(email: string, password: string) {
    return this.http.post('https://ninja-boilerplate.herokuapp.com/v1/api/user/signup', { email: email, password: password })
  }
  getToken():string{
    const user = JSON.parse( localStorage.getItem('currentUser') );
    if(!user){
      return null;
    } 
    return user['token'];
  }
}