import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'layout-header',
    templateUrl: 'layout-header.component.html',
    styles: [`

    `]
})

export class LayoutHeaderComponent {

    @Input()
    public game!: string | null;
    @Input()
    public word!: string;

}