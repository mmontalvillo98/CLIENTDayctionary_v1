import { Component, Input, OnInit } from '@angular/core';
import { PhoneticOption } from 'src/app/interfaces/phonetic.interface';

@Component({
    selector: 'phonetic-option',
    templateUrl: 'phonetic-option.component.html'
})
export class PhoneticOptionComponent implements OnInit {

    @Input()
    public phoneticOption!: PhoneticOption;
    @Input()
    public answeredGame!: boolean;

    ngOnInit() {
    }

}