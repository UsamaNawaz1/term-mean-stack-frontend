import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from "./service/auth.guard";

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'create-user' },
  { path: 'create-user', component: UsersCreateComponent },
  { path: 'edit-user/:id', component: UsersEditComponent },
  { path: 'users-list', component: UsersListComponent },
  {path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }