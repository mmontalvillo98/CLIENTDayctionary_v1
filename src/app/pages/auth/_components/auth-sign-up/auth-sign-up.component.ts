import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardHeaderInformation } from 'src/app/interfaces/card.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ResponseService } from 'src/app/services/response.service';
import { MyErrorStateMatcher } from 'src/app/shared/utils/forms/error-state-matcher.util';
import { MailValidator } from 'src/app/shared/utils/forms/validators.util';

@Component({
    selector: 'auth-sign-up',
    templateUrl: 'auth-sign-up.component.html'
})
export class SignUpComponent {
    public cardHeaderInformation: CardHeaderInformation = {
        icon: "person",
        title: "Sign Up",
        description: "Fill with your information"
    }

    public myForm!: FormGroup;

    matcher = new MyErrorStateMatcher();

    constructor(
        private _authService: AuthService,
        private _responseService: ResponseService,
        private _loadingService: LoadingService,
        private _fb: FormBuilder,
        private _router: Router
    ) {
        this.myForm = this._fb.group({
            mail: ["", [Validators.required, Validators.email], [MailValidator.exists(this._authService)]],
            password: ["", [Validators.required, Validators.minLength(6)]],
            passwordrepeated: ["", [Validators.required, Validators.minLength(6)]],
            notifications: [false]
        },
            { validators: this.checkPasswords }
        );
    }

    get user(): User {
        return {
            mail: this.myForm.controls["mail"].value,
            password: this.myForm.controls["password"].value,
            notifications: this.myForm.controls["notifications"].value
        };
    }

    /**
     * Facilita el acceso a los errores de los inputs del formulario
     * @param control nombre de un input del formulario
     * @param error nombre del error
     * @returns Boolean true si el input tiene ese error
     */
    hasError(control: string, error: string) {
        return this.myForm.controls[control].hasError(error);
    }

    /**
     * Verifica si los datos introducidos en password y confirmpassword son iguales
     * @param group formulario 'myForm'
     * @returns null si el valor de los input 'password' y 'passwordrepeated' es igual, objeto con error si no
     */
    checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        let pass = group.get('password')!.value;
        let confirmPass = group.get('passwordrepeated')!.value
        if(pass !== confirmPass){
            group.get('passwordrepeated')?.setErrors({ notSame: true }) 
        }else{
            group.get('passwordrepeated')?.setErrors(null)
        }
        return null; 
    }

    /**
     * Marca todos los inputs como tocados y si el formulario es válido intenta registrar al usuario en la aplicación
     */
    onSubmit() {
        this.myForm.markAllAsTouched();
        if (this.myForm.valid) {
            this.verify(this.user);
        }
    }

    /**
     * Verifica que el usuario es el dueño del email introducido enviando un email con un código a su cuenta que debe copiar e introducir. En caso de que lo introduzca se le registra.
     * @param user objeto con los datos introducidos por el usuario
     */
    verify(user: User) {
        this._loadingService.loadingShow();
        this._authService.verify(user).subscribe((data) => {
            this._loadingService.loadingHide();
            this._responseService.showVerficationCodeForm(data.code).then((correct) => {
                if (correct) {
                    this.signUp(user);
                }
            });
        }, this.errorManagement)
    }

    /**
     * Registra al usuario en la página y lo logea en la página, guardando un token en el localstorage para facilitar su navegación
     * @param user objeto con los datos introducidos por el usuario
     */
    signUp(user: User) {
        this._loadingService.loadingShow();
        this._authService.singUp(user).subscribe((data) => {
            this._authService.getToken(user).subscribe(token => {
                this._loadingService.loadingHide();
                localStorage.setItem("token", token!);
                this._router.navigate(["/"]);
            }, this.errorManagement)
        }, this.errorManagement)
    }

    /**
     * Para el servicio de carga y muestra un pop up con el mensaje de error
     * @param error excepción lanzada por la api al recibir/procesar/contestar la peticón
     */
    errorManagement = (error: any) => {
        this._loadingService.loadingHide();
        this._responseService.showResponse(error);
    }
}