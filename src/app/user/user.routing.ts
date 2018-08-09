import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { UserComponent } from './user.component';
import { UserListingComponent } from './user-listing/user-listing.component';
const routes: Routes = [
  {
    path: 'listing',
    component: UserListingComponent,
    children: [
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
