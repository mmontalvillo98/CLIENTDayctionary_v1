import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map, of } from "rxjs";
import { User } from "src/app/interfaces/user.interface";
import { AuthService } from "src/app/services/auth.service";

export class MailValidator {
  /**
   * Valida que una cuenta de email introducida en un input no está siendo usada por ningún usuario de la página
   * @param authService servicio de usuario utilizado para realizar la petición
   * @returns AsyncValidatorFn
   */
  static exists(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return authService.usedMail(control.value)
        .pipe(
          map((result: User) =>
            result ? { mailAlreadyExists: true } : null
          )
        );
    };
  }

  /**
   * Valida que una cuenta de email de un input no es la misma que la de un usuario y no se encuentra usuada por otro usuario
   * @param mail cuenta email del usuario
   * @param authService servicio de usuario utilizado para realizar la petición
   * @returns AsyncValidatorFn
   */
  static differentAndExists(mail: string, authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value === mail) return of(null);
      return authService.usedMail(control.value)
        .pipe(
          map((result: User) =>
            result ? { mailAlreadyExists: true } : null
          )
        );
    };
  }

}

