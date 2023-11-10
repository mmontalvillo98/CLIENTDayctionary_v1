import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable, tap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

    constructor(private _authService: AuthService, private router: Router){ }

    /**
     * Verifica si un usuario ha iniciado sesión y cuenta con un token JWT válido.
     * En caso negativo le redirige a la página de inicio de sesión
     * @returns boolean|Observable<boolean>
     */
    private checkAuthStatus():boolean|Observable<boolean>{
        return this._authService.checkAuthentication()
            .pipe(
                tap( isAuthenticated => {
                    if(!isAuthenticated){
                        this.router.navigate(['./auth/login']);
                    }
                })
            )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }
    
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }

}