import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/modules/material.module';
import { CardHeaderComponent } from '../shared/components/card-header/card-header.component';
import { CardFooterComponent } from '../shared/components/card-footer/card-footer.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        CardHeaderComponent,
        CardFooterComponent,
        SpinnerComponent,
    ],
    declarations: [
        CardHeaderComponent,
        CardFooterComponent,
        SpinnerComponent
    ]
})
export class SharedModule { }