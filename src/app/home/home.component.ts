import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  user:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
   }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }
}