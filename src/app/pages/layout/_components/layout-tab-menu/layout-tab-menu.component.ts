import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
    selector: 'layout-tab-menu',
    templateUrl: 'layout-tab-menu.component.html'
})
export class LayoutTabMenuComponent {

    public menuItems = [
        {
            route:'/word/phonetic',
            title:'Phonetic',
            icon:'headphones'
        },
        {
            route:'/word/definition',
            title:'Definition',
            icon:'description'
        },
        {
            route:'/word/synonym',
            title:'Synonym',
            icon:'invert_colors'
        }
    ];

    get isAdmi():boolean | undefined{
        return this._authService.user?.roles?.some(rol=>rol==="ADMIN")
    }

    constructor(
        private _authService: AuthService
    ){}

}