import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { AnswerService } from './answer.service';
import { AnswerDone, MiniGame } from '../interfaces/answer.interface';
import { User } from '../interfaces/user.interface';
import { LoadingService } from './loading.service';
import { ResponseService } from './response.service';
import { todayDate } from '../shared/utils/functions.util';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DayService {

    private _word!: string;
    private _gameId!: string;
    private _answer!: AnswerDone | null;
    private _loading: boolean = false;
    private _available: boolean = true;

    constructor(
        protected authService: AuthService,
        protected gameService: GameService,
        protected answerService: AnswerService,
        protected loadingService: LoadingService,
        protected responseService: ResponseService
    ) { }

    /**
     * Obtiene la fecha de los juegos que se están mostrando, guardada en el localStorage
     */
    get date(): string | null {
        return localStorage.getItem('date');
    }

    /**
     * Obtiene la palabra del día, descargando toda la información en caso de que no se haya descargado o sea un día diferente del que se estaba mostrando
     */
    get todayWord(): string {
        if (!this._word || !this.isToday()) {
            this.reload();
        }
        return this._word;
    }

    /**
     * Recibe las respuestas hechas por el usuario para el juego del día
     */
    get todayAnswers(): AnswerDone | null {
        return this._answer;
    }

    /**
     * Obtiene el usuario del servicio de autentificación
     */
    get user(): User {
        return this.authService.user!;
    }

    /**
     * Recarga toda la información del día, estableciendo el día en el localStorages
     */
    private reload(): void {
        if (!this._loading && this._available && !!this.user) {
            this._loading = true;
            this.loadingService.loadingShow();
            localStorage.setItem('date', todayDate());
            this.gameService.getTodayWord().subscribe((game) => {
                    this._word = game.word!;
                    this._gameId = game.id!;
                    this._loading=false;
                    this.loadingService.loadingHide();
                    this.reloadAnswer();
            }, (error) => {
                this._available = false;
                this.responseService.showResponse(error);
                this.loadingService.loadingHide();
                this._loading=false;
            });
        }
    }

    /**
     * Recarga las respuestas hechas por el usuario para el juego del día
     */
    public reloadAnswer(): void {
        this.loadingService.loadingShow();
        this.answerService.getTodayAnswer(this.user.id!, this._gameId).subscribe((answer) => {
            this._answer = answer;
            this.loadingService.loadingHide();
        }, (error) => {
            this._answer = null;
            this.loadingService.loadingHide();
        });
    }

    /**
     * Responde un minijuego para un usuario a través del servicio de respuestas
     * @param miniGame minijuego a contestar
     * @param choice palabra elegida como respuesta
     */
    public answer(miniGame: MiniGame, choice: string) {
        this.loadingService.loadingShow();
        if (this.isToday()) {
            this.answerService.answerMiniGame(this.user.id!, miniGame, choice, this._gameId!)
                .subscribe(data => {
                    this._answer = data;
                    this.loadingService.loadingHide();
                    this.responseService.showResult(choice === this._word);
                }, (error) => {// The user already answer or not exists game
                    this.loadingService.loadingHide();
                    this.reload();
                    this.responseService.showResponse(error);
                });
        } else {
            this.reload();
        }

    }

    /**
     * Verifica que el día guardado en el localStorage es el día actual
     * @returns Boolean
     */
    private isToday(): boolean {
        return this.date === todayDate();
    }

}