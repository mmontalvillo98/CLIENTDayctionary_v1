import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User, VerificationCode } from '../interfaces/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {

    public user?: User;

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * Recibe el token del localStorage
     */
    get token(): string | null {
        return localStorage.getItem("token");
    }

    /**
     * Verifica si el token del localStorage ha expirado
     */
    get isTokenExpired(): boolean {
        return (this.token) ? new JwtHelperService().isTokenExpired(this.token) : true;
    }

    /**
     * Recupera el id del usuario dueño del token del localStorage
     */
    get tokenId(): String | null {
        return (this.token) ? new JwtHelperService().decodeToken(this.token!).sub : null;
    }

    /**
     * Registra un usuario en la página
     * @param user objeto que contiene los datos del usuario
     * @returns Observable<User> información completa de usuario
     */
    public singUp(user: User): Observable<User> {
        return this.http.post<User>(`${environment.API_PATH}/users`, user);
    }

    /**
     * Inicia sesión con unos credenciales
     * @param user objeto que contiene los credenciales con los que iniciar sesión
     * @returns Observable<User> información completa de usuario
     */
    public singIn(user: User): Observable<User> {
        return this.http.post<User>(`${environment.API_PATH}/users/login`, user);
    }

    /**
     * Verifica que el usuario es dueño del email introducido enviando un email con un código a su cuenta
     * @param user objeto que contiene los datos del usuario
     * @returns Observable<VerificationCode> código enviado a email
     */
    public verify(user: User): Observable<VerificationCode> {
        return this.http.get<VerificationCode>(`${environment.API_PATH}/mails/verify/${user.mail}`)
    }

    /**
     * Verifica si un email está siendo usuado por algún usuario de la página
     * @param mail cuenta de email a comprobar
     * @returns Observable<User> usuario con ese email
     */
    public usedMail(mail: string): Observable<User> {
        return this.http.get<User>(`${environment.API_PATH}/users/${mail}`);
    }

    /**
     * Actualiza los datos de la cuenta de un usuario
     * @param user objeto que contiene los nuevos datos del usuario
     * @returns Observable<User> información completa del usuario actualizada
     */
    public update(user: User): Observable<User>{
        return this.http.put<User>(`${environment.API_PATH}/users`, user);
    }

    /**
     * Borra la cuenta de un usuario
     * @param user objeto que contiene los nuevos datos del usuario
     * @returns Observable<Boolean> True si consigue borrar al usuario
     */
    public delete(user: User): Observable<Boolean>{
        return this.http.delete<Boolean>(`${environment.API_PATH}/users/${user.id}/${user.version}`);
    }

    /**
     * Cambia la contraseña de un usuario por una aleatoriamente generada que envía a su cuenta de email
     * @param mail cuenta de email del usuario que quiere cambiar su contraseña
     * @returns Observable<Boolean> True si el proceso se realiza satisfactoriamente
     */
    public newPassword(mail: string): Observable<Boolean>{
        return this.http.get<Boolean>(`${environment.API_PATH}/mails/forgot/${mail}`)
    }

    /**
     * Obtiene el token JWT de un usuario iniciado sesión
     * @param user objeto que contiene los nuevos datos del usuario
     * @returns Observable<String | undefined> token generado o nada en caso de que los credenciales sean incorrectos
     */
    public getToken(user: User): Observable<string | undefined> {
        return this.http.post<any>(`${environment.API_PATH}/login`, user, { observe: 'response' })
            .pipe(map((response: HttpResponse<any>) => {
                const body = response.body;
                const headers = response.headers;
                const bearerToken = headers.get('Authorization');
                return bearerToken?.replace("Bearer ", "");
            }));
    }

    /**
     * Verifica que un usuario cuenta con un token JWT válido
     * @returns Observable<boolean> 
     */
    checkAuthentication(): Observable<boolean> {
        if (!this.token || this.isTokenExpired) return of(false); //of genera observable con boolean
        return this.http.get<User>(`${environment.API_PATH}/users/token/${this.tokenId}`)
            .pipe(
                tap(user => this.user = user),
                map(user => !!user),
                catchError(err => {
                    localStorage.removeItem("token");
                    return of(false)
                })
            )
    }

    /**
     * Cierra una sesión de usuario borrando al usuario y los datos del localStorage
     */
    logout() {
        this.user = undefined;
        localStorage.clear();
    }

}