import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DefinitionOption } from 'src/app/interfaces/definition.interface';
import { Game } from 'src/app/interfaces/game.interface';
import { PhoneticOption } from 'src/app/interfaces/phonetic.interface';

@Component({
    selector: 'admin-game-form',
    templateUrl: './admin-game-form.component.html'
})

export class AdminGameFormComponent implements OnInit {

    @Input() game!: Game;
    @Input() editable: boolean = false;

    public myForm!: FormGroup;

    constructor(
        private _fb: FormBuilder
    ) { }

    /**
     * Crea el formulario a mostrar
     */
    ngOnInit(): void {
        this.buildForm();
    }

    /**
     * Obtiene las fonéticas del juego a mostrar
     */
    get phonetics(): PhoneticOption[] {
        if (this.game === null) return []
        return [
            { word: this.game?.word!, phonetic: this.game?.phonetic! },
            ...this.game?.similarPhonetics!
        ]
    }

    /**
     * Obtiene las definiciones del juego a mostrar
     */
    get definitions(): DefinitionOption[] {
        if (this.game === null) return []
        return [
            { word: this.game?.word!, definition: this.game?.definition! },
            ...this.game?.similarDefinitions!
        ]
    }

    /**
     * Obtiene los sinónimos del juego a mostrar
     */
    get synonyms(): string[] {
        if (this.game === null) return []
        return [
            this.game?.synonym!,
            ...this.game?.similarSynonyms!
        ]
    }

    /**
     * Construye un formulario con las distintas opciones de los minijuegos.
     */
    buildForm() {
        this.myForm = new FormGroup({});
        this.phonetics.forEach((ph, i) => {
            this.myForm.addControl('simPhWord' + i, new FormControl(ph.word))
            this.myForm.addControl('simPhAudio' + i, new FormControl(ph.phonetic.audio))
            this.myForm.addControl('simPhSyllables' + i, new FormControl(ph.phonetic.syllables))
        });
        this.definitions.forEach((df, i) => {
            this.myForm.addControl('simDfWord' + i, new FormControl(df.word))
            this.myForm.addControl('simDfType' + i, new FormControl(df.definition.type))
            this.myForm.addControl('simDfText' + i, new FormControl(df.definition.text))
        });
        this.synonyms.forEach((sy, i) => {
            this.myForm.addControl('simSyWord' + i, new FormControl(sy))
        });
        if (!this.editable) {
            this.myForm.disable()
        }
    }

    /**
     * Reproduce el audio de una opción de fonética
     * @param event evento generado
     * @param audio audio a reproducir
     */
    play(event: Event, audio: string){
        event.preventDefault();
        event.stopPropagation();
        new Audio(audio).play();
    }

}