import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {


  public loading = 0; 
  private loadingCount = 0;
  private loadingTimeoutId:any; 

  constructor() { }

  /**
   * Muestra un spinner y bloquea la pantalla para informar al usuario de que se está llevando a cabo un proceso
   */
  public loadingShow = () => {
    if (this.loading === 0) {
      this.loadingCount++;
      if (this.loadingTimeoutId === undefined) {
        this.loadingTimeoutId = setTimeout(() => {
          this.loading += this.loadingCount;
          if (this.loadingTimeoutId !== undefined) {
            clearTimeout(this.loadingTimeoutId);
            this.loadingTimeoutId = undefined;
            this.loadingCount = 0;
          }
        }, 250);
      }
    }
    else {
      this.loading++;
    }
  }
  /**
   * Esconde el spinner y desbloquea la pantalla, informando al usuario de que un proceso ha terminado
   */
  public loadingHide = () => {
    if (this.loadingTimeoutId !== undefined) {
      if (this.loadingCount === 1) {
        clearTimeout(this.loadingTimeoutId);
        this.loadingTimeoutId = undefined;
        this.loadingCount = 0;
      }
      else {
        this.loadingCount--;
      }
    }

    if (this.loading > 0) {
      this.loading--;
    }
    else {
      this.loading = 0;
    }
  }

  /**
   * Resetea el contador del spinner
   * @returns undefined
   */
  public loadingKill = () => this.loading = 0;
}
