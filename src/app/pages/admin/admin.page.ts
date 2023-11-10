import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CardHeaderInformation } from 'src/app/interfaces/card.interface';
import { Game } from 'src/app/interfaces/game.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GameService } from 'src/app/services/game.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ResponseService } from 'src/app/services/response.service';
import { todayDate } from 'src/app/shared/utils/functions.util';
import { AdminGameFormComponent } from './_components/admin-game-form/admin-game-form.component';

@Component({
    templateUrl: './admin.page.html'
})

export class AdminPage implements OnInit {

    @ViewChild(AdminGameFormComponent) adminGameFormComponent!: AdminGameFormComponent;

    public game: Game | null = null;

    public datePicker: FormControl = new FormControl(moment());
    public wordPicker: FormControl = new FormControl(this.game?.word);

    constructor(
        private _authService: AuthService,
        private _gameService: GameService,
        private _responseService: ResponseService,
        private _loadingService: LoadingService,
        private _router: Router
    ) { }

    /**
     * Verifica que el usuario es administrador
     */
    get isAdmi(): boolean | undefined {
        return this._authService.user?.roles?.some(rol => rol === "ADMIN")
    }

    /**
     * Verifica si el juego mostrado es nuevo
     */
    get gameIsNew(): boolean {
        return this.game !== null && this.game.id === null
    }

    /**
     * Verifica que el usuario es administrador, en caso negativo cerrando su sesión y reenviándole al login.
     * Y en caso de que sí lo sea busca el juego del día actual 
     */
    ngOnInit() {
        if (!this.isAdmi) {
            this._authService.logout();
            this._router.navigate(["/"]);
        }
        this.searchGame(todayDate())
    }

    /**
     * Evento de cambio de valor del input fecha.
     * En caso de cambio busca el juego de esa fecha
     */
    onChangeDate() {
        this.searchGame(this.datePicker.value.format("YYYYMMDD"))
    }

    /**
     * Busca el juego de una fecha indicada
     * @param date fecha del juego a buscar
     */
    searchGame(date: string) {
        this.game = null;
        this.wordPicker.setValue("");
        this.wordPicker.enable()
        this._gameService.getDateGame(date).subscribe((data) => {
            this.game = data
            this.wordPicker.setValue(this.game.word)
            this.wordPicker.disable()
        });
    }

    /**
     * Intenta crear un juego a partir de una palabra aleatoria o de una indicada por el usuario
     */
    build() {
        this._loadingService.loadingShow();
        let request = this._gameService.getNewGame();
        if (this.wordPicker.value !== null && this.wordPicker.value.trim() !== "") {
            request = this._gameService.getNewGameFromWord(this.wordPicker.value);
        }
        this.game = null;
        this.wordPicker.setValue("");
        this.wordPicker.enable();
        request.subscribe(data => {
            this.game = data
            this.wordPicker.setValue(this.game.word)
            this._loadingService.loadingHide();
        }, error => {
            this._loadingService.loadingHide();
            this._responseService.showResponse(error);
        });
    }

    /**
     * Borra el juego mostrado
     */
    other() {
        this.wordPicker.setValue("");
        this.game = null;
    }

    /**
     * Guarda el juego mostrado
     */
    save() {
        this._loadingService.loadingShow();
        let game: any = {
            word: this.wordPicker.value,
            date: this.datePicker.value.format("YYYYMMDD"),
        }
        Object.keys(this.adminGameFormComponent.myForm.controls).forEach(k => game[k] = this.adminGameFormComponent.myForm.controls[k].value);
        this.game = null;
        this.wordPicker.setValue("");
        this.wordPicker.enable();
        this._gameService.save(game).subscribe((data) => {
            this.game = data;
            this.wordPicker.setValue(this.game.word)
            this.wordPicker.disable();
            this._loadingService.loadingHide();
            this._responseService.showMessage("Game created", "", "success");
        }, error => {
            this._loadingService.loadingHide();
            this._responseService.showResponse(error);
        })
    }
}