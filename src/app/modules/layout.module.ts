import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { LayoutPage } from './../pages/layout/layout.page';
import { RouterModule } from '@angular/router';
import { LayoutHeaderComponent } from '../pages/layout/_components/layout-header/layout-header.component';
import { LayoutTabMenuComponent } from '../pages/layout/_components/layout-tab-menu/layout-tab-menu.component';
import { LayoutUserComponent } from '../pages/layout/_components/layout-user/layout-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutFooterComponent } from '../pages/layout/_components/layout-footer/layout-footer.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        LayoutPage
    ],
    declarations: [
        LayoutPage,
        LayoutHeaderComponent,
        LayoutTabMenuComponent,
        LayoutUserComponent,
        LayoutFooterComponent
    ],
    providers: [],
})
export class LayoutModule { }
