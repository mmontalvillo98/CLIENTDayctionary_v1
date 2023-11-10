import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/modules/material.module';
import { PhoneticOptionComponent } from '../pages/phonetic/_components/phonetic-option/phonetic-option.component';
import { PhoneticPage } from '../pages/phonetic/phonetic.page';
import { SharedModule } from './shared.module';
import { PhoneticAudioComponent } from '../pages/phonetic/_components/phonetic-audio/phonetic-audio.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule
    ],
    exports: [
        PhoneticPage
    ],
    declarations: [
        PhoneticPage,
        PhoneticOptionComponent,
        PhoneticAudioComponent
    ]
})
export class PhoneticModule { }