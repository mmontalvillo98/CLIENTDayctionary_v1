import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ResponseService } from 'src/app/services/response.service';
import { MailValidator } from 'src/app/shared/utils/forms/validators.util';

@Component({
    selector: 'layout-user',
    templateUrl: 'layout-user.component.html'
})

export class LayoutUserComponent {

    public myForm: FormGroup = this._fb.group({
        mail: [this.user.mail, [Validators.email], [MailValidator.differentAndExists(this.user.mail!, this._authService)]],
        password: ["", [Validators.minLength(6)]],
        notifications: [this.user.notifications]
    });

    constructor(
        private _authService: AuthService,
        private _loadingService: LoadingService,
        private _responseService: ResponseService,
        private _fb: FormBuilder,
    ) { }

    get user(): User{
        return {...this._authService.user};
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
     * Evalua si el usuario a introducido y/o cambiado información
     * @returns true si ha hecho cambios, false si no
     */
    modifiedUser(){
        return this.myForm.controls["password"].value !== "" || 
            this.user.mail!==this.myForm.controls["mail"].value ||
            this.user.notifications !== this.myForm.controls["notifications"].value
    }

    /**
     * Marca todos los inputs del formulario como tocados y si no hay errores y existen cambios actualiza los datos
     */
    onSubmit(){
        this.myForm.markAllAsTouched();
        if(this.myForm.valid && this.modifiedUser()){
            this._loadingService.loadingShow
            this._authService.update({
                id: this.user.id, 
                mail: this.myForm.controls["mail"].value,
                password: this.myForm.controls["password"].value,
                notifications: this.myForm.controls["notifications"].value,
                version: this.user.version
            }).subscribe((user)=>{
                this._loadingService.loadingHide();
                this._authService.user = user;
                this.myForm.controls["password"].setValue("");
                this._responseService.showMessage("User updated", "", 'success');
            }, this.errorManagement)
        }
    }

    /**
     * Saca un pop up que pide confirmación al ususario y en caso de que acepte borra al usuario
     */
    deleteUser(event: Event){
        event.stopPropagation();
        this._responseService.showWarning("¿Do you really want to delete de user?").then((result)=>{
            if(result.isConfirmed) {
                this._loadingService.loadingShow();
                this._authService.delete(this.user).subscribe(()=>{
                    this._loadingService.loadingHide();
                    this._responseService.infoAndRedirect("Deleted", "User deleted", "info", "/auth/signIn");
                }, this.errorManagement)
            }
        });
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