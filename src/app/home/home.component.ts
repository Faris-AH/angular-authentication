import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  user: any;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getSignupUsers()
      .subscribe(
        (data) => {
          console.log(data);
        }, (err) => {
          console.log(err);
        });
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }
}