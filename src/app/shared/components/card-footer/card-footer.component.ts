import { Component, OnInit, Input } from '@angular/core';
import { GameAnswer } from '../../../interfaces/answer.interface';
import { DayService } from 'src/app/services/day.service';

export type AnswerType = 'check' | 'clear';

@Component({
    selector: 'card-footer',
    templateUrl: 'card-footer.component.html'
})
export class CardFooterComponent implements OnInit {

    @Input()
    public disabled!: boolean;

    @Input()
    public gameAnswer!: GameAnswer | undefined;

    constructor(
        private dayService: DayService
    ){}

    get icon(): AnswerType | null {
        if(this.gameAnswer!=undefined){
            return this.gameAnswer.word==this.dayService.todayWord ? 'check' : 'clear';
        }
        return null;
    }

    ngOnInit() {
        // SharedUtils.validateNotMissingParameter(
        //     {component: CardFooterComponent.name, name:"disabled", var:this.disabled}
        // );
    }
}