import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameAnswer } from 'src/app/interfaces/answer.interface';
import { CardHeaderInformation } from 'src/app/interfaces/card.interface';
import { PhoneticOption } from 'src/app/interfaces/phonetic.interface';
import { DayService } from 'src/app/services/day.service';
import { PhoneticService } from 'src/app/services/phonetic.service';
import { shuffle } from 'src/app/shared/utils/functions.util';

@Component({
    templateUrl: 'phonetic.page.html'
})
export class PhoneticPage implements OnInit {

    public cardHeaderInformation: CardHeaderInformation = {
        icon: "headphones",
        title: "Audios",
        description: "Pick the word's audio"
    }
    public myForm: FormGroup = this._fb.group({
        selected: [0, [Validators.required]]
    });
    public phoneticOptions: PhoneticOption[] = [];
    public selectedIndex: number | undefined;

    constructor(
        private _dayService: DayService,
        private _phoneticService: PhoneticService,
        private _fb: FormBuilder
    ) { }

    /**
     * Obtiene el número de la opción contestada por el usuario
     */
    get selected(): number { return this.myForm.controls["selected"].value }

    /**
     * Obtiene la respuesta hecha por el usuario para el minijuego, en caso de que la haya realizado
     */
    get todayAnswer(): GameAnswer | undefined {
        return this._dayService.todayAnswers?.gameAnswers.find(ga => ga.miniGame === 'PHONETIC');
    }

    /**
     * Obtiene la palabra del día
     */
    get todayWord(): string {
        return this._dayService.todayWord;
    }

    /**
     * Recibe las distintas opciones a mostrar en el minijuego y las reordena aleatoriamente y recarga las respuestas del usuario para asegurarse de tener la última versión
     */
    ngOnInit() {
        this._phoneticService.getTodayPhonetics().subscribe((data) => {
            this.phoneticOptions = shuffle(data);
        });
        this._dayService.reloadAnswer();
    }

    /**
     * Verifica si una opción es la contestada por el usuario
     * @param i índice de la opción
     * @returns Boolean 
     */
    answeredOption(i: number): boolean {
        return !!(this.phoneticOptions[i].word == this.todayAnswer?.word);
    }

    /**
     * Responde la opción seleccionada por el usuario para ese minijuego
     */
    onSubmit() {
        this._dayService.answer('PHONETIC', this.phoneticOptions[this.selected - 1].word);
    }

    /**
     * Vetrifica si el usuario ha respondido un minijuego
     * @returns Boolean
     */
    disableCheck() {
        return !this.selected || !!this.todayAnswer;
    }

    /**
     * Recibe el índice de la opción seleccionada por el usuario
     * @param i índice de la opción seleccionada por el usuario
     */
    select(i: number){
        this.selectedIndex = i;
    }

}