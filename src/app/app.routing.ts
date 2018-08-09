import { Component } from '@angular/core';
import { AuthLayoutComponent } from './layout/auth/auth-layout.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layout/main/main-layout.component';

const appRoutes: Routes = [
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);