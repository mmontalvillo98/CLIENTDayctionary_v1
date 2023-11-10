import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { SharedUtils } from '../shared-utils/Utils';

@Component({
    selector: 'phonetic-audio',
    templateUrl: './phonetic-audio.component.html',
    styleUrls: ['./phonetic-audio.component.scss']
})

export class PhoneticAudioComponent implements OnInit {

    @Input()
    public audio! :string;

    private _audioElement!: HTMLAudioElement;

    constructor() { }

    ngOnInit() { 
        // SharedUtils.validateNotMissingParameters(
        //         {component: PhoneticAudioComponent.name, name:'audio',   var:this.audio}, 
        //         {component: PhoneticAudioComponent.name, name:'removed', var:this.removed}
        //     );
        this._audioElement = new Audio(this.audio);
    }

    /**
     * Reproduce un audio
     * @param event evento generado
     */
    play(event: Event){
        event.preventDefault();
        event.stopPropagation();
        this._audioElement.play();
    }
}