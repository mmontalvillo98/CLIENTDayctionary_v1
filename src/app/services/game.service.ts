import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GameService {
    constructor(
        private _http: HttpClient
    ){}

    /**
     * Obtiene la palabra del día y su identificador
     * @returns Observable<Game> con solo los parámetros word e id
     */
    public getTodayWord(): Observable<Game>{
        return this._http.get<Game>(`${environment.API_PATH}/words`);
    }

    /**
     * Obtiene el juego completo de una fecha
     * @param date fecha del juego
     * @returns Observable<Game>
     */
    public getDateGame(date: string): Observable<Game> {
        return this._http.get<Game>(`${environment.API_PATH}/games/${date}`);
    }

    /**
     * Recibe un nuevo juego de una palabra aleatoria
     * @returns Observable<Game>
     */
    public getNewGame(): Observable<Game> {
        return this._http.get<Game>(`${environment.API_PATH}/games`);
    }

    /**
     * Intenta crear un juego de una palabra indicada
     * @param word palabra sobre la que crear un juego
     * @returns Observable<Game>
     */
    public getNewGameFromWord(word: string): Observable<Game> {
        return this._http.get<Game>(`${environment.API_PATH}/games/word/${word}`);
    }

    /**
     * Guarda un juego para una fecha concreta
     * @param game juego a guardar
     * @returns Observable<Game>
     */
    public save(game: any): Observable<Game> {
        return this._http.post<Game>(`${environment.API_PATH}/games`, game);
    }

}