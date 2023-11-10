import { NgModule } from '@angular/core';
import { AdminPage } from '../pages/admin/admin.page';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminGameFormComponent } from '../pages/admin/_components/admin-game-form/admin-game-form.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        AdminPage
    ],
    declarations: [
        AdminPage,
        AdminGameFormComponent
    ],
    providers: [],
})
export class AdminModule { }
