import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable, tap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {

    constructor(private _authService: AuthService, private router: Router){ }

    /**
     * Verifica que un usuario no ha iniciado sesión y/o no cuenta con un token JWT válido.
     * En caso negativo le redirige a la página de jugar
     * @returns boolean|Observable<boolean>
     */
    private checkAuthStatus():boolean|Observable<boolean>{
        return this._authService.checkAuthentication()
            .pipe(
                tap( isAuthenticated => {
                    if(isAuthenticated){
                        this.router.navigate(['./word']);
                    }
                }),
                map(isAuthenticated=> !isAuthenticated) // para que canActivated deje pasar
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }
    
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }

}