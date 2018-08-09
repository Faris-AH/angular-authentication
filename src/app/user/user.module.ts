import { UserListingComponent } from './user-listing/user-listing.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.routing';

@NgModule({
  imports: [
    UserRoutingModule
  ],
  exports: [
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserListingComponent
  ],
  providers: [UserService],
})
export class UserModule { }
