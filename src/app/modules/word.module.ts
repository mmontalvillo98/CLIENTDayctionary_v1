import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordRoutingModule } from './word.routing';
import { LayoutModule } from './layout.module';
import { PhoneticModule } from './phonetic.module';
import { DefinitionModule } from './definition.module';
import { SynonymModule } from './synonym.module';
import { MaterialModule } from './material.module';
import { AdminModule } from './admin.module';

@NgModule({
  declarations: [
    // WordIndexPage
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    MaterialModule,//?
    WordRoutingModule,
    LayoutModule,
    DefinitionModule,
    PhoneticModule,
    SynonymModule,
    AdminModule
  ], exports: [
    // WordPage
  ]
})
export class WordModule { }