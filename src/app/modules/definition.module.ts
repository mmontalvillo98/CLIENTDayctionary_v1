import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/modules/material.module';
import { DefinitionPage } from '../pages/definition/definition.page';
import { SharedModule } from './shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        DefinitionPage
    ],
    declarations: [
        DefinitionPage
    ]
})
export class DefinitionModule { }