import { Component } from '@angular/core';

@Component({
    selector: 'auth-nav',
    templateUrl: './auth-nav.component.html',
    styles:[`
            nav {
                width: 100%;
                display: flex;
            }
            nav > * {
                flex-grow: 1;
            }
        `]
})
export class AuthNavComponent {
    public options = [
        {
            route:'/auth/signIn',
            title:'Sign in'
        },
        {
            route:'/auth/signUp',
            title:'Sign up'
        }
    ];
}