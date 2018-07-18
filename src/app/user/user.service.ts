import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getSignupUsers (){
    return this.http.post('https://ninja-boilerplate.herokuapp.com/v1/api/user/all',{}
  );
  }
}