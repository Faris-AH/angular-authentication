import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr :  ToastrService
  ) { }

  ngOnInit() { }
  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        (data: any) => {
          this.loading = false;
          const user = data.data;
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigateByUrl('/');
            this.toastr.success(data.message);
          }
        },
        (error) => {
          this.loading = false;
          this.toastr.error(error.error && error.error.message);
        });
  }
}