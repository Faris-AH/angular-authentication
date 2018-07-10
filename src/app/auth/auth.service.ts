import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post('https://ninja-boilerplate.herokuapp.com/v1/api/user/login', { email: email, password: password })
      .pipe(
        map((res: Response) => { res.json() }),
        catchError(err => { throw 'error in source. Details: ' + err; }),
    )
    // .map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //     }

    //     return user;
    // });
  }
}