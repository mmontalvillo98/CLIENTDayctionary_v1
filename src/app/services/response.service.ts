import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private router: Router
  ) { }

  /**
   * Interpreta una respuesta realizada por la API a una petición, mostrando un mensaje u otro dependiendo del código de estado
   * @param respuesta respuesta realizada por la API a una petición
   */
  public showResponse(respuesta: any): void {
    switch (respuesta.status) {
      case 200: // Respuesta correcta
        Swal.fire('Nice!', 'Operation succesfully done', 'success');
        break;
      case 201: // Guardado correcto
        Swal.fire('Nice!', 'Operation succesfully done', 'success');
        break;
      case 204: // Respuesta sin contenido
        Swal.fire('Congratulations!', 'Changes saved', 'success');
        break;
      case 401: // No autorizado
        this.router.navigate(['./auth/login']);
        break;
      default:
        this.showError(respuesta);
        break;
    }
  }

  /**
   * Muestra una alerta indicando que ha habido un error de credenciales
   */
  public credentialsError() {
    Swal.fire({
      title: 'Credentials error',
      html: 'Incorrect email or password',
      icon: 'error',
    });
  }

  /**
   * Muestra una alerta indicando si se ha respondido o no bien un minijuego
   * @param correct Booleano que indica si se ha contestado satisfactoriamente o no un minijuego
   */
  public showResult(correct: boolean): any {
    if (correct) {
      Swal.fire('Good job!', 'You answer the right choice', 'success');
    } else {
      Swal.fire('Too bad...', 'You didn\'t answer the right choice', 'error');
    }
  }

  /**
   * Muestra el mensaje de error lanzado por la API a una petición
   * @param respuesta respuesta de error realizada por la API a una petición
   */
  private showError(respuesta: any): void {
    // Se vuelve a comprobar status distinto de 401 porque hay veces que entra en el default del switch case, a pesar de ser error 401
    if (respuesta?.error && respuesta?.status !== 401) {
      const txt = respuesta?.error?.message ? respuesta?.error?.message : 'Se ha producido un error';
      Swal.fire('Error', txt, 'error');
    }
  }

  /**
   * Muestra un aviso de un tipo indicado con un título y una información indicada
   * @param title título del aviso
   * @param info información añadida al aviso
   * @param type icono a mostrar
   */
  public showMessage(title: string, info: string, type: SweetAlertIcon) {
    Swal.fire(title, info, type);
  }

  /**
   * Muestra un aviso de un tipo indicado con un título y una información indicada y redirige al usuario a una página
   * @param title título del aviso
   * @param info información añadida al aviso
   * @param type icono a mostrar
   * @param destination ruta de la página a la que redirigir al usuario
   */
  public infoAndRedirect(title: string, info: string, type: SweetAlertIcon, destination: string){
    Swal.fire(title, info, type).then(()=>
      this.router.navigateByUrl(destination)
    );
  }

  /**
   * Muestra al usuario un mensaje de aviso preguntándole si desea seguir adelante o no
   * @param question pregunta realizada al usuario y mostrada en el aviso
   * @returns respuesta del usuario
   */
  public showWarning(question: string) {
    return Swal.fire({
      title: '¡Warning!',
      icon: 'warning',
      html: question,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Confirm',
      confirmButtonAriaLabel: 'Confirm',
      cancelButtonText: 'Cancel',
      cancelButtonAriaLabel: 'Cancel'
    });
  }

  /**
   * Muestra un aviso pidiendo al usuario que introduzca un código
   * @param verificationCode código a pedir
   * @returns respuesta del usuario
   */
  public async showVerficationCodeForm(verificationCode: string) {
    const { value: code } = await Swal.fire({
      title: 'Enter the verification code sended to your email account',
      input: 'text',
      inputLabel: 'Verification code',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        } else if (value !== verificationCode) {
          return 'Incorrect code'
        } else {
          return null;
        }
      }
    })
    return verificationCode === code;
  }

  /**
   * Muestra un aviso pidiendo al usuario un email
   * @returns email del usuario o null
   */
  public async showEnterEmailForm() {
    const { value: code } = await Swal.fire({
      title: 'Enter your email so we can update your password to a new one',
      input: 'email',
      inputLabel: 'Email',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        } else {
          return null;
        }
      }
    })
    return code;
  }
}
