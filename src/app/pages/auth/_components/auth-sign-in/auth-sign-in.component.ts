import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardHeaderInformation } from 'src/app/interfaces/card.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ResponseService } from 'src/app/services/response.service';
import { MyErrorStateMatcher } from 'src/app/shared/utils/forms/error-state-matcher.util';

@Component({
    selector: 'auth-sign-in',
    templateUrl: 'auth-sign-in.component.html',
})
export class SignInComponent {

    public cardHeaderInformation: CardHeaderInformation = {
        icon: "person",
        title: "Sign In",
        description: "Enter your email and password"
    }
    
    public myForm: FormGroup = this._fb.group({
        mail: ["", [Validators.required]],
        password: ["", [Validators.required]],
    });

    matcher = new MyErrorStateMatcher();

    constructor(
        private _authService: AuthService,
        private _responseService: ResponseService,
        private _loadingService: LoadingService,
        private _router: Router,
        private _fb: FormBuilder
    ) { }

    get user(): User {
        return {
            mail: this.myForm.controls["mail"].value,
            password: this.myForm.controls["password"].value,
        };
    }

    /**
     * Facilita el acceso a los errores de los inputs del formulario
     * @param control nombre de un input del formulario
     * @param error nombre del error
     * @returns Boolean true si el input tiene ese error
     */
    hasError(control: string, error: string){
        return this.myForm.controls[control].hasError(error);
    }

    /**
     * Crea un pop up que pide al usuario que introduzca su email para cambiar su contraseña y enviarle un email con la nueva
     */
    forgotPassword(){
        this._responseService.showEnterEmailForm().then((mail) => {
            if (mail) {
                this._loadingService.loadingShow();
                this._authService.newPassword(mail).subscribe(() => {
                    this._loadingService.loadingHide();
                    this._responseService.showMessage("Password update", "Go check your email to see it", "success");
                }, this.errorManagement)
            }
        });
    }

    /**
     * Marca todos los inputs como tocados y si el formulario es válido intentea logearse en la aplicación
     */
    onSubmit() {
        this.myForm.markAllAsTouched();
        if (this.myForm.valid) {
            this.signIn(this.user);
        }
    }

    /**
     * Intenta logearse en la aplicación mediante el usuario y la contraseña
     * @param user objeto con los credenciales introducidos por el usuario
     */
    signIn(user: User) {
        this._loadingService.loadingShow();
        this._authService.getToken(user)
            .subscribe(token => {
                this._loadingService.loadingHide();
                localStorage.setItem("token", token!);
                this._router.navigate(["/"]);
            }, this.errorManagement);
    }

    /**
     * Para el servicio de carga y muestra un pop up con el mensaje de error
     * @param error excepción lanzada por la api al recibir/procesar/contestar la peticón
     */
    errorManagement = (error: any) => {
        this._loadingService.loadingHide();
        this._responseService.credentialsError();
    }

}