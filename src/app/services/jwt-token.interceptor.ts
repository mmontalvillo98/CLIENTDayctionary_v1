import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class JwtTokenInterceptor implements HttpInterceptor {

    /**
     * Obtiene el token JWT guardado en el localStorage
     */
    get token(): String | null {
        return localStorage.getItem('token');
    }

    /**
     * Intercepta todas las llamadas a la API e introduce el token JWT como cabecera
     * @param req petición
     * @param next siguiente paso de la llamada
     * @returns Observable<HttpEvent<any>>
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            const modReq = req.clone({
                setHeaders: {
                    'Authorization': 'Bearer '+this.token
                }
            });
            return next.handle(modReq);
        }
        return next.handle(req);
    }
}