import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DayService } from 'src/app/services/day.service';

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.page.html'
})
export class LayoutPage {

    constructor(
        private _dayService: DayService,
        private _router: Router,
        private _authService: AuthService
    ) { }

    /**
     * Obtiene la palabra del día del servicio del día
     */
    get todayWord(): string {
        return this._dayService.todayWord;
    }
    /**
     * Obtiene el nombre del juego que se está jugando extrayéndolo de la ruta de la url
     */
    get game(): string | null {
        const route: string[] = this._router.url.substring(1).split('/');
        if (route.length > 1) {
            return route[1];
        }
        return null;
    }

    /**
     * Cierra una sesión de usuario y le redirige a la página de inicio de sesión
     */
    logout() {
        this._authService.logout();
        this._router.navigate(["/"]);
    }

}