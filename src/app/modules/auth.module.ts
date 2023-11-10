import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { AuthPage } from '../pages/auth/auth.page';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { AuthRoutingModule } from './auth.routing';
import { SignInComponent } from '../pages/auth/_components/auth-sign-in/auth-sign-in.component';
import { SignUpComponent } from '../pages/auth/_components/auth-sign-up/auth-sign-up.component';
import { AuthNavComponent } from '../pages/auth/_components/auth-nav/auth-nav.component';

@NgModule({
    imports: [
        AuthRoutingModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        AuthPage
    ],
    declarations: [
        AuthPage,
        AuthNavComponent,
        SignInComponent,
        SignUpComponent
    ]
})
export class AuthModule {}
