import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthPage } from '../pages/auth/auth.page';
import { SignInComponent } from '../pages/auth/_components/auth-sign-in/auth-sign-in.component';
import { SignUpComponent } from '../pages/auth/_components/auth-sign-up/auth-sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: '**', redirectTo: 'signIn' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }