import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
  model: any = {};
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr :  ToastrService
  ) { }

  ngOnInit() { }
  register() {
    this.loading = true;
    this.authService.register(this.model.username, this.model.password)
      .subscribe(
        (data: any) => {
          this.loading = false;
          const user = data.data;
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigateByUrl('/home');
            this.toastr.success(data.message);
          }
        },
        error => {
          this.loading = false;
          this.toastr.error(error.error && error.error.message);
        });
  }
}