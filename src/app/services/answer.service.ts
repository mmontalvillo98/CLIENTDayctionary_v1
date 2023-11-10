import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MiniGame, AnswerDone } from '../interfaces/answer.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AnswerService {

    http = inject(HttpClient);

    /**
     * Responde un minijuego pasado como parámetro para un usuario
     * @param userId identificador del usuario que responde
     * @param miniGame minijuego a responder
     * @param word palabra seleccionada como respuesta
     * @param gameId identificador del juego del que forma parte el minijuego
     * @returns Observable<AnswerDone> respuestas hechas por el usuario para ese juego
     */
    public answerMiniGame(userId: string, miniGame: MiniGame, word: string, gameId: string): Observable<AnswerDone> {
        return this.http.post<AnswerDone>(`${environment.API_PATH}/answers/answer`, {
            userId, miniGame, word, gameId 
        });
    }

    /**
     * Busca las respuestas hechas por un usuario de un juego
     * @param userId identificador del usuario que responde
     * @param gameId identificador del juego del que forma parte el minijuego
     * @returns Observable<AnswerDone> respuestas hechas por el usuario para ese juego
     */
    public getTodayAnswer(userId: string, gameId: string): Observable<AnswerDone> {
        return this.http.get<AnswerDone>(`${environment.API_PATH}/answers/answer/${userId}/${gameId}`);
    }

}