import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameAnswer } from 'src/app/interfaces/answer.interface';
import { CardHeaderInformation } from 'src/app/interfaces/card.interface';
import { SynonymOption } from 'src/app/interfaces/synonym.interface';
import { DayService } from 'src/app/services/day.service';
import { SynonymService } from 'src/app/services/synonym.service';
import { shuffle } from 'src/app/shared/utils/functions.util';

@Component({
    templateUrl: 'synonym.page.html',
    styleUrls: [
        'synonym.page.scss'
    ]
})
export class SynonymPage implements OnInit {


    public cardHeaderInformation: CardHeaderInformation = {
        icon: "invert_colors",
        title: "Related words",
        description: "Pick the word's synonym"
    }
    public myForm: FormGroup = this._fb.group({
        selected: [0, [Validators.required]]
    });
    public synonymOptions: SynonymOption[] = [];
    public selectedIndex: number | undefined;

    constructor(
        private _dayService: DayService,
        private _synonymService: SynonymService,
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
        return this._dayService.todayAnswers?.gameAnswers.find(ga => ga.miniGame === 'SYNONYM');
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
        this._synonymService.getTodaySynonyms().subscribe((data) => {
            this.synonymOptions = shuffle(data);
        });
        this._dayService.reloadAnswer();
    }

    /**
     * Verifica si una opción es la contestada por el usuario
     * @param i índice de la opción
     * @returns Boolean 
     */
    answeredOption(i: number): boolean {
        return !!(this.synonymOptions[i].word == this.todayAnswer?.word);
    }

    /**
     * Responde la opción seleccionada por el usuario para ese minijuego
     */
    onSubmit() {
        this._dayService.answer('SYNONYM', this.synonymOptions[this.selected - 1].word);
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
    select(){
        this.selectedIndex = this.myForm.controls["selected"].value-1;
    }

}