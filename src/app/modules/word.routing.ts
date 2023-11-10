import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPage } from '../pages/layout/layout.page';
import { PhoneticPage } from '../pages/phonetic/phonetic.page';
import { DefinitionPage } from '../pages/definition/definition.page';
import { SynonymPage } from '../pages/synonym/synonym.page';
import { WordPage } from '../pages/word/word.page';
import { AdminPage } from '../pages/admin/admin.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      { path: '', component: WordPage},
      { path: 'definition', component: DefinitionPage },
      { path: 'phonetic', component: PhoneticPage },
      { path: 'synonym', component: SynonymPage },
      { path: 'admin', component: AdminPage },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordRoutingModule { }