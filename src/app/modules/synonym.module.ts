import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/modules/material.module';
import { SharedModule } from './shared.module';
import { SynonymPage } from '../pages/synonym/synonym.page';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        SynonymPage
    ],
    declarations: [
        SynonymPage
    ]
})
export class SynonymModule { }