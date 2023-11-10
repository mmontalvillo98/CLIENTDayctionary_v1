import { Component, Input, OnInit } from '@angular/core';
import { CardHeaderInformation } from 'src/app/interfaces/card.interface';

@Component({
    selector: 'card-header',
    templateUrl: 'card-header.component.html'
})

export class CardHeaderComponent implements OnInit {

    @Input()
    public information!: CardHeaderInformation;

    get icon()       :string{return this.information.icon}
    get title()      :string{return this.information.title}
    get description():string{return this.information.description}

    ngOnInit() {
        // SharedUtils.validateNotMissingParameter(
        //     {component: CardHeaderComponent.name, name:"information", var:this.information}
        // );
    }
}